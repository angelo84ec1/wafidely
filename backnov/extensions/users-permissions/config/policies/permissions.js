'use strict';

const _ = require('lodash');

module.exports = async (ctx, next) => {
    let role;

    if (ctx.state.user) {
        // request is already authenticated in a different way
        return next();
    }

    if (ctx.request && ctx.request.header && !ctx.request.header.authorization) {
        const token = ctx.cookies.get("token");
        if (token) {
            ctx.request.header.authorization = "Bearer " + token;
        }
    }

    if (ctx.request && ctx.request.header && ctx.request.header.authorization) {
        try {
            const { id } = await strapi.plugins['users-permissions'].services.jwt.getToken(ctx);

            if (id === undefined) {
                throw new Error('Invalid token: Token did not contain required fields');
            }

            // fetch authenticated user
            ctx.state.user = await strapi.plugins[
                'users-permissions'
            ].services.user.fetchAuthenticatedUser(id);
        } catch (err) {
            return handleErrors(ctx, err, 'unauthorized');
        }

        if (!ctx.state.user) {
            return handleErrors(ctx, 'User Not Found', 'unauthorized');
        }

        role = ctx.state.user.role;

        if (role.type === 'root') {
            return await next();
        }

        const store = await strapi.store({
            environment: '',
            type: 'plugin',
            name: 'users-permissions',
        });

        if (
            _.get(await store.get({ key: 'advanced' }), 'email_confirmation') &&
            !ctx.state.user.confirmed
        ) {
            return handleErrors(ctx, 'Your account email is not confirmed.', 'unauthorized');
        }

        if (ctx.state.user.blocked) {
            return handleErrors(
                ctx,
                'Your account has been blocked by the administrator.',
                'unauthorized'
            );
        }
    }

    // Retrieve `public` role.
    if (!role) {
        role = await strapi.query('role', 'users-permissions').findOne({ type: 'public' }, []);
    }

    const route = ctx.request.route;
    const permission = await strapi.query('permission', 'users-permissions').findOne(
        {
            role: role.id,
            type: route.plugin || 'application',
            controller: route.controller,
            action: route.action,
            enabled: true,
        },
        []
    );

    if (!permission) {
        return handleErrors(ctx, undefined, 'forbidden');
    }

    // Execute the policies.
    if (permission.policy) {
        return await strapi.plugins['users-permissions'].config.policies[permission.policy](ctx, next);
    }

    // Execute the action.
    await next();
};

const handleErrors = (ctx, err = undefined, type) => {
    throw strapi.errors[type](err);
};
