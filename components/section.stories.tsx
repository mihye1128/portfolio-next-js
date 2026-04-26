import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, screen } from "storybook/test";
import Section from "./section";

const meta = {
  title: "Components/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
    },
    title: {
      control: "text",
    },
    description: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

const SampleContent = () => (
  <div className="text-muted-foreground rounded-md border border-dashed p-8 text-center text-sm">
    children に任意のコンテンツが入ります
  </div>
);

export const Default: Story = {
  args: {
    title: "Section Title",
    children: <SampleContent />,
  },
  play: async ({ args }) => {
    expect(
      screen.getByRole("heading", { level: 2, name: args.title })
    ).toBeInTheDocument();
  },
};

export const WithDescription: Story = {
  args: {
    title: "About",
    description:
      "セクションの説明文をここに表示します。タイトルの下にセンタリングされて配置されます。",
    children: <SampleContent />,
  },
};

export const WithReactNodeDescription: Story = {
  args: {
    title: "Contact",
    description: (
      <>
        改行や <strong>装飾</strong> を含む ReactNode も渡せます。
      </>
    ),
    children: <SampleContent />,
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Highlighted",
    description: "className で背景色などを上書きできます。",
    className: "bg-muted",
    children: <SampleContent />,
  },
};

export const WithId: Story = {
  args: {
    id: "anchor-target",
    title: "アンカーリンク対応",
    description: "id を指定するとページ内リンクで遷移できます。",
    children: <SampleContent />,
  },
};
