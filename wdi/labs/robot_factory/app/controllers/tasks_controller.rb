class TasksController < ApplicationController
  def index
    found_robot = Robot.find_by_id(params[:robot_id])
     render json: found_robot.tasks
  end

  def show
  end

  def create
    found_robot = Robot.find_by_id(params[:robot_id])
    new_task = Task.new(tasks_params)
    found_robot.tasks << new_task

    if !new_task.new_record?
      render json: new_task
      else
        render status: 422
    end
  end

  def update
    found_robot = Robot.find_by_id(params[:robot_id])
    task = found_robot.tasks.find(params[:id])
    saved = task.update(tasks_params)

    if saved
      render status: 204
    else
      render status: 422
    end
  end

  def destroy
    found_robot = Robot.find_by_id(params[:robot_id])
    task = found_robot.tasks.find(params[:id])
    deleted = task.destroy
     if deleted
      render status: 204
    else
      render status: 422
    end
  end
  private

 def tasks_params
   params.require(:task).permit(:name, :discription, :completed)
 end
end
