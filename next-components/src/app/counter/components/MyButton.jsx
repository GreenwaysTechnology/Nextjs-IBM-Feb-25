'use client'

import { Button } from '@carbon/react';

export function MyButton() {
    return <>
        <Button kind="danger">
            Button
        </Button>

        <Button kind="danger--tertiary">
            Tertiary Danger Button
        </Button>

        <Button kind="danger--ghost">
            Ghost Danger Button
        </Button>
    </>
}