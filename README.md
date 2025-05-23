# Snackbezorgd.nl 🍟🍕
![Preview image](/images/snackbezorgd-banner-gh.png)

# Beschrijving 📝
Welkom bij snackbezorgd.nl. Ons fictieve bedrijf voor een school project op het Alfa College Groningen.

Het doel is dat je leert samenwerken in een team, je leert je medevernatwoordelijkheid te voelen voor het gemeenschappelijke doel, namenlijk een webapplciatie bouwen. Je leert planmatic en gestructuureerd te werken. Ook leer je elkaar aan te spreken op gedrag, motiviatie en inzet.

De frontend staat op het moment [hier](https://theonly3aq.github.io/snackbezorgd.nl/) live. (niet helemaal werkend)

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


## Hoe start ik de Fontend server?
Ga naar de frontend folder:
```
$ cd snackbezorgd
```
Installeer de dependencies:
```
$ npm install
```
Start the server:
```
$ npm start
```


## Hoe begin je met developen?

*Voordat je begint, moet je even een terminal openen en de volgende commando's doen:*

```
$ git config --global user.name "Mona Lisa"
```
*Waar de naam `Mona Lisa` jouw naam is.*

```
$ git config --global user.email "monalisa@gmail.com"
```
*Waar de naam `monalisa@gmail.com` jouw email van je GitHub account is.*

**Nu kunnen we echt beginnen:**

1. Clone deze repository
    ```
    $ git clone https://github.com/snackbezorgd/snackbezorgd-frontend.git
    ```
2. Maak een branch aan van je feature, met het formaat als dit: `feature-FEATURE-NAAM` of `bugfix-BUGFIX-NAAM` 

    Verander de branch van `main` naar de branch van de feature waar je aan werkt. Dit voorkomt dat wijzigingen meteen naar de website worden gepushed.

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

    ***Je mag deze stap ook via de Visual Studio Code GitHub tools doen, zie [hier](https://youtu.be/oekG-j4beWA) een video over hoe je dit doet.***


5. Check nog een keer dat je zit in de branch die je zelf aan hebt gemaakt (NOOIT IN MAIN OF DEV). Typ daarna in:
    ```
    $ git push
    ```

    ***Je mag deze stap ook via de Visual Studio Code GitHub tools doen, zie [hier](https://youtu.be/oekG-j4beWA) een video over hoe je dit doet.***

6. Ga naar de [github repo](https://github.com/snackbezorgd/snackbezorgd-frontend.git), en klik op "Pull requests". Druk dan op "New pull request" Dan zal je daar je wijziging zien, waarschijnlijk staat er dan ergens zoiets als dit:
    ![Preview image](/images/md_img_2.png)
    Druk dan op de bovenste (de meest recente)

7. Maak de PR (Pull request) aan en assign wat reviewers. Dit zal dus de gitmaster (Kars) moeten zijn, maar je mag ook nog andere reviewers toevoegen. Zorg ook altijd dat je de PR in `dev` merged (NOOIT IN `MAIN`). Zoals de foto hieronder:
    ![Preview image](/images/comparing_changes.png)

8. Als je PR goedgekeurd word, word die gemerged van `JOUW-BRANCH-NAAM` -> `dev`. Dan zitten jouw wijzigingen dus volledig in de productie omgeving.



## Contact 

Heb je vragen of feedback? We horen graag van je! 🚀

- 📧 Email: info@snackbezorgd.karstalens.nl
- 💻 Discord: @vroomvroomman


#
###### Disclaimer: snackbezorgd is een volledig victief bedrijf, en dus niet serieus bedoelt.
