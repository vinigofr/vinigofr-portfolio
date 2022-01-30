import { render, screen } from '@testing-library/react'
import Index from '../pages/index'

describe('Na rota / do portfolio', () => {
  it('Verifica se ha na tela um header', () => {
    render(<Index />)

    const header = screen.getByTestId('header');

    expect(header);
  })
})