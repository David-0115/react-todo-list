import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from './TodoList';

describe('TodoList', () => {
    it('should render', () => {
        render(<TodoList />)
    });

    it('should add todos', async () => {
        render(<TodoList />)

        const input = screen.getByTestId('todo');
        await userEvent.type(input, "new todo")

        const btn = screen.getByText("Create Todo");
        await userEvent.click(btn);

        expect(input.value).toBe("");

        const todo = screen.getByText("new todo");
        expect(todo).toBeInTheDocument();

        await userEvent.type(input, "next todo");
        await userEvent.click(btn);

        expect(input.value).toBe("");

        const todo2 = screen.getByText("next todo");
        expect(todo2).toBeInTheDocument();
    });

    it('should remove todos', async () => {
        render(<TodoList />)

        const input = screen.getByTestId('todo');
        await userEvent.type(input, "new todo")

        const btn = screen.getByText("Create Todo");
        await userEvent.click(btn);

        expect(input.value).toBe("");

        const todo = screen.getByText("new todo");
        expect(todo).toBeInTheDocument();

        const remove = screen.getByTestId('can')
        await userEvent.click(remove);
        expect(todo).not.toBeInTheDocument();
    });
})