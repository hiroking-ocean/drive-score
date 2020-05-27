require 'test_helper'

class ScoresControllerTest < ActionDispatch::IntegrationTest
  test "should get board" do
    get scores_board_url
    assert_response :success
  end

end
