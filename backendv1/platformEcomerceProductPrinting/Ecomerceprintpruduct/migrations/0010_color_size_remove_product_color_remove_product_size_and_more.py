# Generated by Django 4.0.4 on 2022-05-20 15:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomerceprintpruduct', '0009_alter_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('color', models.CharField(blank=True, choices=[('black', 'black'), ('white', 'white')], max_length=200, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Size',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('size', models.CharField(blank=True, choices=[('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL')], max_length=200, null=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='product',
            name='color',
        ),
        migrations.RemoveField(
            model_name='product',
            name='size',
        ),
        migrations.AddField(
            model_name='product',
            name='color',
            field=models.ManyToManyField(blank=True, choices=[('black', 'black'), ('white', 'white')], max_length=200, null=True, to='Ecomerceprintpruduct.color'),
        ),
        migrations.AddField(
            model_name='product',
            name='size',
            field=models.ManyToManyField(blank=True, choices=[('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL')], max_length=200, null=True, to='Ecomerceprintpruduct.size'),
        ),
    ]
