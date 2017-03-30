from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    if (request.path == "/"):
        return render(request, "home.html")
    else:
        path = request.path.replace('/', '')
        template_name = path + ".html"
        return render(request, template_name)
