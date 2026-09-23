import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import { expect, userEvent, waitFor } from "storybook/test";
import { ModeToggle } from "./mode-toggle";

const meta = {
  title: "Components/ModeToggle",
  component: ModeToggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="storybook-theme"
      >
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ToggleTheme: Story = {
  play: async ({ canvas, canvasElement }) => {
    const root = canvasElement.ownerDocument.documentElement;
    const button = canvas.getByRole("button", { name: /モードに切り替え/ });
    await waitFor(() => {
      expect(root.matches(".light, .dark")).toBe(true);
    });
    const initiallyDark = root.classList.contains("dark");

    await userEvent.click(button);
    await waitFor(() => {
      expect(root.classList.contains("dark")).toBe(!initiallyDark);
      expect(button).toHaveAccessibleName(
        initiallyDark ? "ダークモードに切り替え" : "ライトモードに切り替え"
      );
    });
    expect(canvas.queryByRole("menu")).not.toBeInTheDocument();

    await userEvent.click(button);
    await waitFor(() => {
      expect(root.classList.contains("dark")).toBe(initiallyDark);
    });
  },
};
