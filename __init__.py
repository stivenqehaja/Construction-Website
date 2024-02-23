from flask import Flask, render_template, redirect

app = Flask(__name__)

# *_______________MAIN PAGE ROUTE_______________*
@app.route('/')
def index():
    return render_template('main-page.html')

# *_______________ERRORS_______________*
# Invalid URL
@app.errorhandler(404)
def page_not_found(e):
    return render_template("errors/404.html"), 4041

# Internal Server Error
@app.errorhandler(500)
def page_not_found(e):
    return render_template("errors/500.html"), 500

if __name__ == '__main__':
    app.run(debug=True)