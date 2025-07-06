// components/Counter.stories.tsx
import { expect } from "@storybook/jest";
import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
  title: "Components/Counter",
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ตรวจว่ามีข้อความเริ่มต้น "Count: 0"
    expect(await canvas.findByText("Count: 0")).toBeInTheDocument();

    // กดปุ่ม
    await userEvent.click(await canvas.getByText("เพิ่ม"));

    // ตรวจว่าค่าเปลี่ยนเป็น "Count: 1"
    expect(await canvas.findByText("Count: 1")).toBeInTheDocument();
  },
};
