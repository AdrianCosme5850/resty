import { render, fireEvent, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';

import App from '../app';

describe('Testing if various functions of our application', () => {
    test('The url typed into the address bar should appear on the page', () => {
        render(<App/>)
        let input = screen.getByTestId('inputForm');
        fireEvent.change(input, {target: { value: 'https://pokeapi.co/api/v2/pokemon/ditto'}});
        let submitButton = screen.getByTestId('submitButton');
        fireEvent.click(submitButton);
        expect(screen.getByText(/ditto/)).toBeInTheDocument();
    })
})