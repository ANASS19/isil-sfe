# Generated by Django 4.0.4 on 2022-05-29 21:39

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('Ecomerceprintpruduct', '0009_delete_panier_designs_uplodedebyclient_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='designs',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL),
        ),
    ]