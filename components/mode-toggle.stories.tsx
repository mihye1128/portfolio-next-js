import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThemeProvider } from "next-themes";
import { expect, screen, userEvent, waitFor } from "storybook/test";
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
        defaultTheme="light"
        enableSystem={false}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ModeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ModeToggle />,
};

export const OpenMenu: Story = {
  render: () => <ModeToggle />,
  play: async () => {
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });
    await userEvent.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText(/^Light$/i)).toBeInTheDocument();
      expect(screen.getByText(/^Dark$/i)).toBeInTheDocument();
      expect(screen.getByText(/^System$/i)).toBeInTheDocument();
    });
  },
};

export const SelectDarkMode: Story = {
  render: () => <ModeToggle />,
  play: async () => {
    const toggleButton = screen.getByRole("button", { name: /toggle theme/i });
    await userEvent.click(toggleButton);

    const darkOption = await screen.findByText(/^Dark$/i);
    await userEvent.click(darkOption);
  },
};
