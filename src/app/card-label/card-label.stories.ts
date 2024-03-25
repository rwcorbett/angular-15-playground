import type { Meta, StoryObj } from '@storybook/angular';
import { CardLabelComponent } from "./card-label.component";

const meta: Meta<CardLabelComponent> = {
  component: CardLabelComponent,
  title: "Card/CardLabel",
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<CardLabelComponent>;

export const Primary: Story = {
  args: {
    cardName: "asdf",
  },
};
