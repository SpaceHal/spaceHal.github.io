"use strict";(self.webpackChunkmy_test=self.webpackChunkmy_test||[]).push([[4698],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),u=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,k=m["".concat(d,".").concat(c)]||m[c]||p[c]||l;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(7462),i=(t(7294),t(3905));const l={id:"imu",title:"Inertiale Messeinheit - Gyroskop, Beschleunigungssensor und Magnetometer",sidebar_label:"Inertiale Messeinheit",custom_edit_url:null},a=void 0,o={unversionedId:"zumo32u4/imu",id:"zumo32u4/imu",title:"Inertiale Messeinheit - Gyroskop, Beschleunigungssensor und Magnetometer",description:"Pololu Zumo 32u4 Library: Inertiale Messeinheit",source:"@site/docs/zumo32u4/imu.md",sourceDirName:"zumo32u4",slug:"/zumo32u4/imu",permalink:"/docs/zumo32u4/imu",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"imu",title:"Inertiale Messeinheit - Gyroskop, Beschleunigungssensor und Magnetometer",sidebar_label:"Inertiale Messeinheit",custom_edit_url:null},sidebar:"mySidebar",previous:{title:"Radencoder",permalink:"/docs/zumo32u4/encode"}},d={},u=[{value:"Sensortyp ermitteln",id:"sensortyp-ermitteln",level:2},{value:"<code>enableDefault()</code>",id:"enabledefault",level:2},{value:"Gyroskop",id:"gyroskop",level:3},{value:"L3GD20H",id:"l3gd20h",level:4},{value:"LSM6DS33",id:"lsm6ds33",level:4},{value:"<code>configureForTurnSensing()</code>",id:"configureforturnsensing",level:2},{value:"Gyroskop",id:"gyroskop-1",level:3},{value:"L3GD20H",id:"l3gd20h-1",level:4},{value:"LSM6DS33",id:"lsm6ds33-1",level:4},{value:"<code>configureForBalancing()</code>",id:"configureforbalancing",level:2},{value:"Gyroskop",id:"gyroskop-2",level:3},{value:"L3GD20H",id:"l3gd20h-2",level:4},{value:"LSM6DS33",id:"lsm6ds33-2",level:4},{value:"<code>configureForFaceUphill()</code>",id:"configureforfaceuphill",level:2},{value:"Gyroskop",id:"gyroskop-3",level:3},{value:"<code>void readAcc()</code>",id:"void-readacc",level:2},{value:"<code>void readGyro()</code>",id:"void-readgyro",level:2},{value:"<code>void readMag()</code>",id:"void-readmag",level:2},{value:"<code>void read()</code>",id:"void-read",level:2},{value:"<code>bool accDataReady()</code>",id:"bool-accdataready",level:2},{value:"<code>bool gyroDataReady()</code>",id:"bool-gyrodataready",level:2},{value:"<code>bool magDataReady()</code>",id:"bool-magdataready",level:2},{value:"Drehwinkel mit Gyroskop bestimmen",id:"drehwinkel-mit-gyroskop-bestimmen",level:2}],s={toc:u};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Pololu Zumo 32u4 Library: ",(0,i.kt)("a",{parentName:"em",href:"https://pololu.github.io/zumo-32u4-arduino-library/class_zumo32_u4_i_m_u.html"},"Inertiale Messeinheit"))),(0,i.kt)("h2",{id:"sensortyp-ermitteln"},"Sensortyp ermitteln"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'Zumo32U4IMU imu;                  // Objekt f\xfcr die Inertialsensoren\n\nZumo32U4IMUType imuType;\n\nimuType = imu.getType();\nSerial.println("IMU Type:");\nswitch (imuType) {\ncase Zumo32U4IMUType::LSM303D_L3GD20H:\n    Serial.println("LSM303D (Kompass und Beschleunigungssensor) und L3GD20H (Gyro)");\n    break;\ncase Zumo32U4IMUType::LSM6DS33_LIS3MDL:\n    Serial.println("LSM6DS33 (Beschleunigungssensor und Gyro) und LIS3MDL (Kompass)");\n    break;\ncase Zumo32U4IMUType::Unknown:\n    Serial.println("Unknown");\n    break;\n}\n')),(0,i.kt)("h2",{id:"enabledefault"},(0,i.kt)("inlineCode",{parentName:"h2"},"enableDefault()")),(0,i.kt)("h3",{id:"gyroskop"},"Gyroskop"),(0,i.kt)("h4",{id:"l3gd20h"},"L3GD20H"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 189.4 Hz  "),(0,i.kt)("li",{parentName:"ul"},"Bandbreite Filter: 70 Hz bandwidth"),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 245 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 8,75 mdps/LSB (milli degree per second / LSB)")),(0,i.kt)("h4",{id:"lsm6ds33"},"LSM6DS33"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 208 Hz (high performance)"),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 245 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 8,75 mdps/LSB (milli degree per second / LSB)")),(0,i.kt)("h2",{id:"configureforturnsensing"},(0,i.kt)("inlineCode",{parentName:"h2"},"configureForTurnSensing()")),(0,i.kt)("h3",{id:"gyroskop-1"},"Gyroskop"),(0,i.kt)("h4",{id:"l3gd20h-1"},"L3GD20H"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 757.6 Hz  "),(0,i.kt)("li",{parentName:"ul"},"Bandbreite Filter: 100 Hz bandwidth"),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 2000 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 70 mdps/digit (milli degree per second / digit)")),(0,i.kt)("h4",{id:"lsm6ds33-1"},"LSM6DS33"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 833 Hz  "),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 2000 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 70 mdps/LSB (milli degree per second / LSB)")),(0,i.kt)("h2",{id:"configureforbalancing"},(0,i.kt)("inlineCode",{parentName:"h2"},"configureForBalancing()")),(0,i.kt)("h3",{id:"gyroskop-2"},"Gyroskop"),(0,i.kt)("h4",{id:"l3gd20h-2"},"L3GD20H"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 757.6 Hz  "),(0,i.kt)("li",{parentName:"ul"},"Bandbreite Filter: 100 Hz bandwidth"),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 2000 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 70 mdps/LSB (milli degree per second / LSB)"),(0,i.kt)("li",{parentName:"ul"})),(0,i.kt)("h4",{id:"lsm6ds33-2"},"LSM6DS33"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"output data rate: 833 Hz  "),(0,i.kt)("li",{parentName:"ul"},"Messbereich: +/- 2000 Grad pro Sekunde (dps)"),(0,i.kt)("li",{parentName:"ul"},"Empfindlichkeit: 70 mdps/LSB (milli degree per second / LSB)")),(0,i.kt)("h2",{id:"configureforfaceuphill"},(0,i.kt)("inlineCode",{parentName:"h2"},"configureForFaceUphill()")),(0,i.kt)("h3",{id:"gyroskop-3"},"Gyroskop"),(0,i.kt)("p",null,"Siehe ",(0,i.kt)("a",{parentName:"p",href:"../zumo32u4/imu#enabledefault"},(0,i.kt)("inlineCode",{parentName:"a"},"enableDefault()"))),(0,i.kt)("h2",{id:"void-readacc"},(0,i.kt)("inlineCode",{parentName:"h2"},"void readAcc()")),(0,i.kt)("h2",{id:"void-readgyro"},(0,i.kt)("inlineCode",{parentName:"h2"},"void readGyro()")),(0,i.kt)("p",null,"Lie\xdft die Werte des Gyroskops. K\xf6nnen anschlie\xdfend mit ",(0,i.kt)("inlineCode",{parentName:"p"},"g.x"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"g.y")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"g.z")," ausgelesen werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Zumo32U4IMU imu;          // Objekt f\xfcr die Inertialsensoren\n\nimu.readGyro();           // Auslesen der Gyroscopedaten (Zugriff auf Daten \xfcber das Objekt)\nint x = imu.g.z;          // Zugriff auf Gyro-Daten in x-Richtung\nint y = imu.g.z;          // Zugriff auf Gyro-Daten in y-Richtung\nint z = imu.g.z;          // Zugriff auf Gyro-Daten in z-Richtung (Drehung in der xy-Ebene)\n\n")),(0,i.kt)("h2",{id:"void-readmag"},(0,i.kt)("inlineCode",{parentName:"h2"},"void readMag()")),(0,i.kt)("h2",{id:"void-read"},(0,i.kt)("inlineCode",{parentName:"h2"},"void read()")),(0,i.kt)("h2",{id:"bool-accdataready"},(0,i.kt)("inlineCode",{parentName:"h2"},"bool accDataReady()")),(0,i.kt)("h2",{id:"bool-gyrodataready"},(0,i.kt)("inlineCode",{parentName:"h2"},"bool gyroDataReady()")),(0,i.kt)("p",null,"Gibt ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," zur\xfcck, wenn das Gyroskop seit dem letzten Auslesen der Daten neu Daten hat."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Zumo32U4IMU imu;                  // Objekt f\xfcr die Inertialsensoren\n\nwhile (!imu.gyroDataReady()) {}   // Warten auf neue Gyro-Daten\n")),(0,i.kt)("h2",{id:"bool-magdataready"},(0,i.kt)("inlineCode",{parentName:"h2"},"bool magDataReady()")),(0,i.kt)("h2",{id:"drehwinkel-mit-gyroskop-bestimmen"},"Drehwinkel mit Gyroskop bestimmen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/* Das Beispielprogramm liest die Rohdaten des Gyroskops vom Zumo 32u4 \xfcber die I2C Schnittstelle \n    ein und gibt den Drehwinkel auf dem LCD-Display aus. Der verwendete Sensor ist der L3GD20H oder\n    der LSM6DS33 von STMicroeletronics.\n*/\n\n#include <Wire.h>                 // I2C Bibliothek\n#include <Zumo32U4.h>\n\nZumo32U4IMU imu;                  // Objekt f\xfcr Inertialsensoren\nZumo32U4LCD lcd;\n\nunsigned long lastTime = 0;       // Display Update-Zeit\nunsigned long gyroLastUpdate = 0; // Zeitdifferenz zwischen Gyro-Messung\nfloat offSet = 0;                 // Offset-Fehler in mdps/digit (milli degree per second/digit)\nfloat winkel  = 0;                // Einheit: deg (Gradma\xdf 0 ... 360\xb0)\n\nvoid setup(){\n    Serial.begin(115200);\n\n    lcd.clear(); lcd.print("Gyro Cal");\n    lcd.gotoXY(0, 1); lcd.print("ibration");\n\n    Wire.begin();\n    imu.init();\n    imu.configureForTurnSensing();        // Empfindlichkeit und Filter einstellen\n\n    // Ermitteln des Offset-Fehlers des Gyroskops\n    float sumGyro = 0;\n    for (long i = 0 ; i < 2000; i++) {\n        while (!imu.gyroDataReady()) {}   // Warten auf neue Gyro-Daten\n        imu.readGyro();                   // Einlesen der Gyro-Daten\n        sumGyro += imu.g.z;               // imu.g.z: Winkelgeschwindigkeit der z-Achse in mdps/digit\n    }\n    offSet = sumGyro / 2000;              // Offset-Fehler berechnen\n\n    gyroLastUpdate = micros();\n    lcd.clear();  lcd.print("Winkel:");\n}\n\nvoid loop()\n{\n    unsigned long now = micros();         // Zeit in Mikrosekunden (\xb5s)\n    long dt = now - gyroLastUpdate;       // Zeitdifferenz in Mikrosekunden (\xb5s)\n    gyroLastUpdate = now;\n\n    float drehRate, deltaWinkel;\n    imu.readGyro();                       // Einlesen der Gyro-Daten\n    drehRate = (imu.g.z - offSet) * 0.07; // Winkelgeschwindigkeit umgerechnet in deg/s (Gradma\xdf/Sekunde)\n    deltaWinkel = drehRate * dt / 1e6;    // Winkel\xe4nderung pro Zeitintervall (dt in Sekunden umrechnen)\n    winkel += deltaWinkel;                // Drehwinkel als Summe aller Winkel\xe4nderung\n\n    if (millis() - lastTime > 200) {\n        lastTime = millis();\n        lcd.gotoXY(0, 1); lcd.print(winkel ); lcd.print("   ");\n    }\n}\n')))}p.isMDXComponent=!0}}]);