from django.shortcuts import render, redirect
from django.contrib import messages

from .models import ContactMessage


def index(request):

    if request.method == "POST":

        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")

        if name and email and subject and message:

            ContactMessage.objects.create(
                name=name,
                email=email,
                subject=subject,
                message=message
            )

            messages.success(
                request,
                "Thank you! Your message has been sent successfully."
            )

            return redirect("home")

        else:

            messages.error(
                request,
                "Please fill in all fields."
            )

    return render(request, "home/index.html")