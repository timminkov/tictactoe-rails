require 'spec_helper'

describe TictactoeController do
  describe 'the home page' do
    it 'renders the game view' do
      get :game 

      expect(response).to render_template :game 
    end
  end
end
