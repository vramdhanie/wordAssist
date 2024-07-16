import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Header } from '../components/Header'

const meta = {
    title: 'Layout/Header',
    component: Header,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        layout: 'fullscreen',
    },
    args: {
        onLogin: fn(),
        onLogout: fn(),
        onCreateAccount: fn(),
    },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const LoggedIn: Story = {
    args: {
        user: {
            name: 'Jane Doe',
        },
        children: 'My App',
    },
}

export const LoggedOut: Story = {
    args: {
        children: 'My App',
    },
}

export const LoggedOutWithControls: Story = {
    args: {
        showControls: true,
        children: 'My App',
    },
}

export const LoggedOutWithoutControls: Story = {
    args: {
        showControls: false,
        children: 'My App',
    },
}
