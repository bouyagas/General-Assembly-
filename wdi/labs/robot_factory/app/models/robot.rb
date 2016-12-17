class Robot < ApplicationRecord
  has_many :tasks, dependent: :destroy
end
