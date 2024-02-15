# Snackbezorgd.nl 🍟🍕
![Preview image](/images/snackbezorgd-banner-gh.png)

JOUW WIJZIGING HIER

# Beschrijving 📝
Welkom bij snackbezorgd.nl. Ons fictieve bedrijf voor een school project op het Alfa College Groningen.

Het doel is dat je leert samenwerken in een team, je leert je medevernatwoordelijkheid te voelen voor het gemeenschappelijke doel, namenlijk een webapplciatie bouwen. Je leert planmatic en gestructuureerd te werken. Ook leer je elkaar aan te spreken op gedrag, motiviatie en inzet.

## Over snackbezorgd.nl 🚀

Snackbezorgd is jouw go-to bezorgdienst voor heerlijke snacks. Of je nu zin hebt in frietjes, pizza, of iets zoets - wij hebben het allemaal! We begrijpen jouw honger en streven ernaar om je favoriete snacks razendsnel bij je af te leveren.

## Hoe voeg ik mijn SSH keys toe?
1. Ga naar je *instellingen* (Win + I), druk dan op *Apps*
2. Onder de *Apps and Features* tab, druk je op *Optional Features*
    ![Preview image](/images/windows-apps.png)
3. Scroll naar beneden tot je *OpenSSH Client* ziet.
    - Staat die er niet in, druk op het plus teken om hem toe te voegen
    - Scroll naar beneden tot je *OpenSSH Client ziet.*
    - Klik dan op *installeer*
    ![Preview image](/images/optional-windows-features.png)
4. Druk op de *Windows toets*
5. Typ in *CMD*
6. Doe dan rechtermuisknop *Command Prompt*, open als administrator. Druk dan op *JA*
    ![Preview image](/images/run-command-prompt-as-admin.png)
7. In de command line doe het volgende:
    ```
    $ ssh-keygen
    ```
    ![Preview image](/images/generate-ssh-key-in-windows-command-prompt.png)
    - Hij vraag nu voor een locatie, druk gewoon op *ENTER*
    - Je word gevraagd om een wachtwoord, vul niks in en druk weer op *ENTER*
    - Nu is je SSH key aangemaakt.
8. Ga naar C:\Users\GEBRUIKERSNAAM/.ssh
9. Open dan het bestand `id_rsa.pub`, en kopieer wat er in staat en stuur dat prive naar @vroomvroomman op discord


## Hoe begin je met developen?

1. Clone deze repository
    ```
    $ git clone https://github.com/TheOnly3aq/snackbezorgd.nl.git
    ```
2. Verander de branch van `main` naar `dev`. Dit voorkomt dat wijzigingen meteen naar de website worden gepushed.

    ![Preview image](/images/md_img_1.png)
3. Maak je wijzigingen, als je daarmee klaar bent ga naar de volgende stap

4. Open de commandline in de map waar je project staat. Typ in:
    ```
    $ git add <BESTANDSNAAM>
    ```
    Doe dit voor elk bestand dat je hebt aangepast. Daarna doe je: 
    ```
    # git commit -m "JOUW BERICHT"
    ```
    Dit is belangrijk voor de gitmaster om te zien waar het commit over gaat. Dit kan redelijk simpel zijn, zoals "fixed api bug".

5. Check nog een keer dat je in de `dev` branch (of een branch die je zelf aan hebt gemaakt, dat mag ook.) zit. Typ daarna in:
    ```
    $ git push
    ```
6. Ga naar de [github repo](https://github.com/TheOnly3aq/snackbezorgd.nl), en klik op "Pull requests". Druk dan op "New pull request" Dan zal je daar je wijziging zien, waarschijnlijk staat er dan ergens zoiets als dit:
    ![Preview image](/images/md_img_2.png)
    Druk dan op de bovenste (de meest recente)

7. Maak de PR (Pull request) aan en assign wat reviewers. Dit zal dus de gitmaster (Kars) moeten zijn, maar je mag ook nog andere reviewers toevoegen.

8. Als je PR goedgekeurd word, word die gemerged van `dev` -> `main`. Dan zitten jouw wijziginge dus volledig in de productie omgeving.


## Hoe start ik de Backend server?
Ga naar de backend folder:
```
$ cd snackbezorgd-frontend/snackbezorgd
```
Installeer de requirements:
```
& pip3 install -r requirements.txt
```
of
```
$ pip install -r requirements.txt
```
Initialiseer de Virtual Env:
```
$ pipenv shell
```
Start de app:
```
$ python manage.py startapp snackbezorgd_app
```
Doe migrations:
```
$  python manage.py migrate
```
Start de server:
```
$  python manage.py runserver
```

## Hoe start ik de Fontend server?
Ga naar de frontend folder:
```
$ cd snackbezorgd-frontend/snackbezorgd
```
Start de server:
```
& npm start
```


## Contact 

Heb je vragen of feedback? We horen graag van je! 🚀

- 📧 Email: info@snackbezorgd.knightsofni.nl
- 💻 Discord: @vroomvroomman


#
###### Disclaimer: snackbezorgd is een volledig victief bedrijf, en dus niet serieus bedoelt.
