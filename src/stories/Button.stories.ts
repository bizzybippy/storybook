// components/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"], // สำหรับแสดง docs อัตโนมัติ
  argTypes: {
    onClick: { action: "clicked" }, // แสดง action log เมื่อคลิกปุ่ม
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    label: "Click me",
  },
};

export const Loading: Story = {
  args: {
    label: "Submit",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Can't click",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    label: "Large Button",
    size: "lg",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: "secondary",
  },
};
