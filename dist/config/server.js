"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 5000),
    app: {
        keys: env.array('APP_KEYS'),
    },
});
