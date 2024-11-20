# Docker-Swarm-E-commerce
 
Acest proiect reprezintă o aplicație e-commerce construită pentru a demonstra utilizarea Docker Swarm în orchestrarea containerelor. Scopul său principal este de a oferi un mediu scalabil, fiabil și ușor de gestionat pentru aplicațiile distribuite.

# Caracteristici principale

 ###  Arhitectură distribuită: 
 - Aplicația este compusă din mai multe servicii (frontend, backend, și bază de date), fiecare containerizat și gestionat de Docker Swarm. 
 ###  Scalabilitate automată:
 - Suport pentru creșterea sau reducerea dinamică a numărului de instanțe ale serviciilor în funcție de cerințe. 
 ### Persistență a datelor
 - Baza de date utilizează volume Docker pentru a asigura păstrarea datelor în cazul restartării containerelor. 
 ###  Rețea securizată:
 - Toate serviciile comunică prin rețele Docker Swarm securizate. 
 ###  Simplitate în implementare: 
 - Configurare și lansare rapidă folosind fișierele docker-compose.yml. 

# Structura proiectului

   ### Frontend:
   - Interfața utilizatorului construită pentru a permite navigarea și cumpărăturile online.
   ### Backend:
   - API-ul care gestionează logica aplicației și interacțiunile cu baza de date.
   ### Database: 
   - Sistem de management al datelor pentru stocarea utilizatorilor, produselor și comenzilor.

# Cum să rulezi proiectul?

   ### Cerințe preliminare:
   ```Docker``` și ```Docker Compose``` instalate.
        
   Activarea ```Docker Swarm``` pe mașina ta (```docker swarm init```).

# Clonează proiectul:
```
git clone https://github.com/AlexandruEmil/Docker-Swarm-E-commerce.git
```
```
cd Docker-Swarm-E-commerce
```

# Lansează stack-ul Docker:

    docker stack deploy -c docker-compose.yml ecommerce

 ###  Accesează aplicația:
   Frontend-ul va fi disponibil pe portul configurat (de exemplu, ```http://localhost:3000```).
   API-ul pe alt port specificat (de exemplu, ```http://localhost:5000```).

# Obiective
   Învățarea conceptelor de bază ale Docker Swarm și orchestrarea containerelor.
   Construirea unui proiect scalabil care poate fi extins cu ușurință în medii de producție.
