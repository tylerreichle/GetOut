class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render "api/categories/index"
  end

  def show
    @category = Category.find_by(title: params[:title])
    render "api/categories/show"
  end
end
