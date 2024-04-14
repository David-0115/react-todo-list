import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewTodoForm from './NewTodoForm';

describe('NewTodoForm', () => {
    it('should render', () => {
        render(<NewTodoForm />)
    });

    it('should be editable', async () => {
        render(<NewTodoForm />)
        const input = screen.getByTestId('todo');
        await userEvent.type(input, "new todo")

        expect(input.value).toBe("new todo");

    });

    it('should have a submit button', async () => {
        render(<NewTodoForm />)
        const btn = screen.getByText("Create Todo");

        expect(btn).toBeInTheDocument();
    });

    it('should clear the input when submitted and call addTodo', async () => {
        const addTodo = vi.fn()
        render(<NewTodoForm addTodo={addTodo} />)

        const input = screen.getByTestId('todo');
        await userEvent.type(input, "new todo")
        expect(input.value).toBe("new todo");

        const btn = screen.getByText("Create Todo");
        await userEvent.click(btn);
        expect(input.value).toBe("");

        expect(addTodo).toHaveBeenCalled();
    })
})