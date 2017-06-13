from werkzeug.security import generate_password_hash, check_password_hash

def set_password(password):
    return pw_hash = generate_password_hash(password)

def check_password(password):
    return check_password_hash(pw_hash, password)