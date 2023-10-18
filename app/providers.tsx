'use client';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <NextUIProvider>
            {children}
        </NextUIProvider>
    );
};