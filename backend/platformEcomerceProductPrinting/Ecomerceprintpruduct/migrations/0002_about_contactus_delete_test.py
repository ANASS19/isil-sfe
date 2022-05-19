# Generated by Django 4.0.4 on 2022-05-16 21:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('Tel', models.CharField(max_length=50)),
                ('address', models.CharField(blank=True, max_length=200, null=True)),
                ('desription', models.TextField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='ContactUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('message', models.TextField(max_length=255)),
            ],
        ),
        migrations.DeleteModel(
            name='Test',
        ),
    ]
