SpaceBoardCore
==============

Includes:
---------
 - Mongo-API
 - Socket-API
 - Security-API
 - Route-API
 - Pluginsystem
 - ACP [+ Config Editor]
 - Config API
 - Installer
 - Eventsystem
 - Unittestsystem [ _Is Babel.js nesscessary?_ ]
 - Webserver
 
Code:
---------
 - Nutzung von ES6 serverseitig! Clientseitig ES5
 - Variablen klein, neue Wörter groß (z.B. `var ichBinEineVariable;`)
 - Funktionen klein, neue Wörter groß (z.B. `var ichBinEineFuntion = function(data...) { ... };`)
 - Klassen groß, neue Wörter groß (z.B. `class IchBinEineKlasse { ... }`)
 - Dateinamen klein, neue Wörter groß (z.B. `ichBinEineDatei.js`)
 - Dateinamen von Klassen mit "class" verifizieren und groß schreiben (z.B. `IchBinEineKlassenDatei.class.js`)
 
License-System:
---------------
 Bei Kauf einer Default-License des SpaceBoard können bis zu 3 Server eingetragen werden. Beim Kauf einer Premium-License bis zu 10 Server.
 Beim Installieren eines Plugins werden Plugin-ID (oder so), Server-Name und License-Key an unseren Server gesendet.
 Diese werden dann in unserer Datenbank verglichen und stimmen Server-Name und License-Key mit den eingetragenen Servern einer Default- oder Premium-License überein, wird das Plugin installiert.
 Ansonsten wird der Zugriff auf das Plugin verweigert und ein Fehler ausgegeben.
