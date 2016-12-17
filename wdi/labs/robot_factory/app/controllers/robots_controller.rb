class RobotsController < ApplicationController
  def index
    @robots = Robot.all
    render json: @robots
  end

  def show
    @robot = Robot.find_by_id(params[:id])
    render json: @robot
  end

  def create
    @robot = Robot.new(robots_params)
    if @robot.save
      render json: @robot
  else
    render status: 422
   end
  end

  def update
    @robot = Robot.find_by_id(params[:id])
     if saved = @robot.update(robots_params)
        render status: 204
      else
        render status: 422
    end
  end

  def destroy
    @robot = Robot.find_by_id(params[:id])
    if @robot.destroy!
        render status: 204
      else
        render status: 422
    end
  end

  private
  def robots_params
   params.require(:robot).permit(:name, :avatar, :serial, :skill)
  end

end
