import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen } from "storybook/test";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  play: async () => {
    const image = await screen.findByAltText("Avatar");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://github.com/shadcn.png");
  },
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/invalid-image.jpg" alt="Avatar" />
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
  ),
  play: async () => {
    const fallback = screen.getByText("AB");
    expect(fallback).toBeInTheDocument();
  },
};

export const FallbackOnly: Story = {
  render: () => (
    <Avatar>
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
  play: async () => {
    const fallback = screen.getByText("JD");
    expect(fallback).toBeInTheDocument();
  },
};

export const CustomSize: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-12 w-12">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-24 w-24">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    </div>
  ),
  play: async () => {
    expect(screen.getByText("SM")).toBeInTheDocument();
    expect(screen.getByText("MD")).toBeInTheDocument();
    expect(screen.getByText("LG")).toBeInTheDocument();
  },
};
