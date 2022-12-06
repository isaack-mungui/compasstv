class User < ApplicationRecord
    has_one :profile

    has_secure_password
    validates :email_address, uniqueness: { case_sensitive: false }
end
