class Content < ApplicationRecord
  belongs_to :creator
  has_one :category
end
