import { SiGithub } from "@icons-pack/react-simple-icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, fn, screen, userEvent } from "storybook/test";
import { Button } from "./button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "default",
    size: "default",
    onClick: fn(),
  },
  play: async ({ args }) => {
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};

export const Destructive: Story = {
  args: {
    children: "Delete",
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Link: Story = {
  args: {
    children: "Link",
    variant: "link",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large",
    size: "lg",
  },
};

export const Icon: Story = {
  args: {
    variant: "ghost",
    size: "icon",
    children: <SiGithub className="size-5" />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
  play: async () => {
    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <SiGithub className="mr-2 size-4" />
        GitHub
      </>
    ),
  },
  play: async () => {
    const button = screen.getByRole("button", { name: /github/i });
    expect(button).toBeInTheDocument();
  },
};
