# Generated by Django 4.0.4 on 2022-05-22 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0030_alter_category_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='name',
            field=models.CharField(choices=[('T-chirt', 'T-chirt'), ('Hodie', 'Hodie'), ('gacket', 'gacket')], max_length=50),
        ),
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, choices=[('T-chirt', 'T-chirt'), ('Hodie', 'Hodie'), ('gacket', 'gacket')], max_length=200, null=True),
        ),
    ]