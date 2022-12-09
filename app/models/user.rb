class User < ApplicationRecord
    has_one :profile

    has_secure_password
    validates :email, uniqueness: { case_sensitive: false }
end
