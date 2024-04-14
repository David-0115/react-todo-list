import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo'

describe('Todo', () => {
    it('should render', () => {
        const remove = vi.fn();
        render(<Todo item="testing" removeTodo={remove} data-index={0} />)
    });

    it('should display the todo text', async () => {
        const remove = vi.fn();
        render(<Todo item="testing" removeTodo={remove} data-index={0} />)

        const text = await screen.findByText('testing')
        expect(text).toBeInTheDocument();
    })

    it('should have a remove button and be clickable', async () => {
        const remove = vi.fn();
        render(<Todo item="testing" removeTodo={remove} data-index={0} />)
        const can = screen.getByTestId('can')
        await userEvent.click(can);

        expect(remove).toHaveBeenCalled();

    })
})