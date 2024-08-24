from django.urls import path
from . import views

urlpatterns = [
    # path('contacts/', views.ContactListCreate.as_view(), name='contact-list-create'),
    # path('contacts/<int:pk>/', views.ContactRetrieveUpdateDestroy.as_view(), name='contact-retrieve-update-destroy'),
    path('contacts/', views.get_contacts, name='get-contacts'),
    path('contacts/create', views.create_contact, name='create-contact'),
]