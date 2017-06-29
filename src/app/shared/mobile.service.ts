import { Injectable } from '@angular/core'

@Injectable()
export class MobileListService{
	getMobiles(){
		return MOBILE_LIST;
	}

  getMobile(id:number){
  return MOBILE_LIST.find(mobile => mobile.id === id)
  }
  
  setMobile(newValue){
  MOBILE_LIST.push(newValue);
 }
}

const MOBILE_LIST = [
  {
    "id": 1,
    "name": "Nokia Lumia 930 (Black, 32 GB)",
    "rating": "4.2",
    "brand": "Nokia",
    "price": "₹35,301",
    "os": "Windows",
    "stock":"In Stock",
    "camera": "20MP Rear Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/u/9/z/nokia-lumia-930-930-original-imae3p4qayfxzqau.jpeg?q=70",
    "desc": "Wide Viewing Angle, ClearBlack Display Technology, Brightness Control, Sculpted Glass, Sunlight Readability Enhancements, Super-sensitive Touch, High Brightness Mode, Refresh Rate 60 Hz, Lumia Color Profile, Corning Gorilla Glass 3"
  },
  {
    "id": 2,
    "name": "Nokia Lumia 900 (White, 16 GB)",
    "rating": "2.6",
    "brand": "Nokia",
    "price": "₹30,248",
    "os": "Windows",
    "camera": "8MP Rear Camera | 1MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/4/x/c/nokia-lumia-900-original-imadddewmfu4ujny.jpeg?q=70",
    "desc": "MMS Enabled, Flight Mode, Dedicated Keys, Audio Recorder, Video Stabilization, Internet Radio, Device Startup Security, Calculator, Calendar, Games, Alarm, To-do List, Notes"
  },
  {
    "id": 3,
    "name": "Nokia Lumia 1520 (Yellow, 32 GB)",
    "rating": "4.5",
    "brand": "Nokia",
    "price": "₹39,835",
    "os": "Windows",
    "stock":"In Stock",
    "camera": "20MP Rear Camera | 1.2MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/c/u/f/nokia-lumia-1520-original-imadrbkpc87fykfg.jpeg?q=70",
    "desc": "System Connectors: Micro - USB - B, Wi-Fi Security Modes: WPA2 (AES / TKIP), WPA, WPA-Personal, WEP, WPA2-Personal, WPA-Enterprise, WPA2-Enterprise, PEAP-MSCHAPv2, EAP-SIM, EAP-AKA, NFC Support, Wi-Fi Channel Bonding, SkyDrive Cloud Storage, Free Cloud Storage: 7 GB, Calculator, Clock, Calendar, Alarm, Reminders, To-do List, Wallet, Family Room, Kids Corner, Text-to-speech Message Reader, Audio Messaging, MMS Enabled, Number Screening for Messaging, Voice Commands, Call Waiting, Voice Dial, Lost Device Tracking, Anti-phishing, Remote Security, PIN Code Security, Data Encryption, Photo Sharing, Video Sharing, Location Sharing, Nokia Beamer, DRM Support: PlayReady, Internet Radio, Audio and Voice Recording, Video Streaming"
  },
  {
    "id": 4,
    "name": "Nokia Lumia 610 (Magenta, 8 GB)",
    "rating": "3.9",
    "brand": "Nokia",
    "price": "₹12,031",
    "os": "Windows",
    "stock":"In Stock",
    "camera": "5MP Rear Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/t/m/d/nokia-lumia-610-original-imadbf8r3ehrgbhg.jpeg?q=70",
    "desc": "Calendar, To-do List, Flight Mode, Games, MMS Enabled, Audio and Video Streaming, Active Noise Cancellation, Microsoft Zune, Clock, Calculator, Dedicated Keys, Voice Input, Bluetooth Support Only for Transferring Contacts and Messages"
  },
  {
    "id": 5,
    "name": "Mi 4 (White, 16 GB)",
    "rating": "4.0",
    "brand": "Mi",
    "price": "₹18,028",
    "stock":"In Stock",
    "os": "Android",
    "camera": "13MP Rear Camera | 8MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/3/q/h/mi-mzb4239in-original-imae3z7uqh9gpypz.jpeg?q=70",
    "desc": "Crafted to perfection with a stainless steel frame, the Mi 4 is great for gaming with its 3D rendering capabilities, taking pictures with its 13MP Sony high speed camera and handling complex tasks with the Qualcomm Snapdragon 801 quad core processor. With intense and vivid colors, the phone lets you view pictures and enjoy videos with a rich viewing experience."
  },
  {
    "id": 6,
    "name": "Mi 3 (Metallic Grey, 16 GB)  ",
    "rating": "4.4",
    "brand": "Mi",
    "price": "₹13,999",
    "stock":"In Stock",
    "os": "Android",
    "camera": "13MP Rear Camera | 2MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/k/8/j/mi-mi3-original-imady54gkp5zt5hs.jpeg?q=70",
    "desc": "Accelerate your life with the latest smartphone - the Mi 3. This sleek, elegant smartphone comes with a Qualcomm Snapdragon 800 processor, 13 Megapixel primary camera and wireless connectivity. It also has its own User Interface and Cloud space which acts as a backup for your content."
  },
  {
    "id": 7,
    "name": "Mi 5 (Black, 32 GB)  (3 GB RAM)",
    "rating": "4.3",
    "brand": "Mi",
    "price": "₹22,999",
    "os": "Android",
    "stock":"In Stock",
    "camera": "16MP Rear Camera | 4MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/y/p/y/mi-mi-5-mzb4783in-original-imaejypp9hfv9yrv.jpeg?q=70",
    "desc": "Featuring a sharp profile and a lightweight body and powered by the Snapdragon 820 processor, the MI 5 is perfect for your fast lifestyle. Now you can game even faster with the Adreno 530 graphics processor."
  },
  {
    "id": 8,
    "name": "Redmi 3S Prime (Dark Grey, 32 GB)",
    "rating": "4.2",
    "brand": "Mi",
    "price": "₹8,999",
    "os": "Android",
    "stock":"In Stock",
    "camera": "13MP Rear Camera | 5MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/f/r/6/mi-redmi-3s-prime-na-original-imaeh6bdfjgzxucj.jpeg?q=70",
    "desc": "Unlock the Redmi 3S Prime with the super-fast fingerprint sensor and enjoy a world of lag-free multitasking with the quick and powerful Snapdragon processor and the versatile 3GB RAM."
  },{
    "id": 9,
    "name": "Apple iPhone SE (Rose Gold, 32 GB)",
    "rating": "4.4",
    "brand": "Apple",
    "price": "₹21,999",
    "stock":"In Stock",
    "os": "IOS",
    "camera": "12MP Rear Camera | 1.2MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/j2c6du80/mobile/n/n/5/apple-iphone-se-mp852hn-a-original-imaetmazmydgutzf.jpeg?q=70",
    "desc": "Mobile Network, Multiple Languages and Characters Support, Built-in Speaker, Microphones, Lightning Connector, External Buttons and Connectors: Touch ID Sensor, Volume Up / Down, Ring / Silent, On / Off or Sleep / Wake, Calendar, Notes, Reminders, Clock, Calculator, AirPlay Mirroring Photos, Audio and Video Out to Apple TV (2nd Generation), Video Mirroring and Video Out Support, Location: Mobile Data, iBeacon Micro-location, FaceTime Video Calling, Audio Calling - FaceTime Audio, Wi-Fi Calling, Multi-tasking, Quick Type Keyboard, Spotlight Search, Dictionary Support, Spell Check, Air Drop, Air Play, Air Print, Control Centre, Handoff, Homekit, iCloud Keychain, iCloud Drive, Notification Centre, Siri"
  },
  {
    "id": 10,
    "name": "Apple iPhone 7 (Black, 32 GB)",
    "rating": "4.5",
    "brand": "Apple",
    "stock":"In Stock",
    "price": "₹45,999",
    "os": "IOS",
    "camera": "12MP Rear Camera | 7MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/7/e/e/apple-iphone-7-na-original-imaemzee435f9gpu.jpeg?q=70",
    "desc": "Take your iPhone experience to the next level with iPhone 7. Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers, this smartphone will drastically enhance your iPhone experience. With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive"
  },
  {
    "id": 11,
    "name": "Apple iPhone 6 (Space Grey, 32 GB)",
    "rating": "4.3",
    "brand": "Apple",
    "price": "₹25,999",
    "stock":"In Stock",
    "os": "IOS",
    "camera": "8MP Rear Camera | 1.2MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/j2c6du80/mobile/f/2/j/apple-iphone-6-a1586-original-imaetnf2h6gck78p.jpeg?q=70",
    "desc": "Multi-touch, IPS Display, Wide-angle Viewing, LED Backlit Wide Screen, 500 cd / m2 Maximum Brightness, Finger Print Resistant Oleophobic Coating on Front, Full sRGB Standard, Display Zoom, Dual-domain Pixels, Reachability"
  },
  {
    "id": 12,
    "name": "Apple iPhone 7 Plus (Rose Gold, 256 GB)",
    "rating": "4.8",
    "brand": "Apple",
    "price": "₹79,000",
    "os": "IOS",
    "stock":"In Stock",
    "camera": "12MP + 12MP Dual Rear Camera | 7MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/x/y/m/apple-iphone-7-plus-mn4u2hn-a-original-imaerm2nwmeedag4.jpeg?q=70",
    "desc": "With better cameras, long-lasting battery life, powerful processor and enhanced stereo speakers, the iPhone 7 Plus takes your iPhone experience till date to the next level. Thanks to its vibrant display, sleek design and a water- and splash-resistant enclosure, this smartphone looks every bit as impressive as it is."
  },
  {
    "id": 13,
    "name": "Samsung Galaxy S8 Plus",
    "rating": "4.6",
    "brand": "Samsung",
    "price": "₹74,000",
    "stock":"In Stock",
    "os": "Android",
    "camera": "12MP Rear Camera | 8MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/j3dbtzk0/mobile/e/j/h/samsung-galaxy-s8-plus-na-original-imaeugjwh4wczmgy.jpeg?q=70",
    "desc": "Meet the Samsung Galaxy S8 Plus - the phone that’ll take your smartphone experience to the next level. The end-to-end Infinity Display of the Galaxy S8 Plus flows seamlessly into the aluminum shell, offering a smooth, curved surface without sharp angles. Boasting a top-notch security system featuring an Iris scanner, face recognition, fingerprint reader and more, the Galaxy S8 Plus keeps your private data safe from prying eyes. Its powerful 8 MP front camera and 12 MP rear camera further add to this smartphone’s appeal."
  },
  {
    "id": 14,
    "name": "Samsung Galaxy On Nxt (Gold, 64 GB)  (3 GB RAM)",
    "rating": "4.1",
    "brand": "Samsung",
    "price": "₹15,900",
    "stock":"In Stock",
    "os": "Android",
    "camera": "13MP Rear Camera | 8MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/j1qqs280/mobile/m/7/d/samsung-galaxy-on-nxt-sm-g610fzdhins-original-imaet97hmqvfn5a6.jpeg?q=70",
    "desc": "Flaunt your style with the Samsung Galaxy On Nxt. Featuring a drool-worthy body and impressive features, this smartphone is built to perform. Talk to your mom, chat with your friends, browse the Internet - stay connected the way that suits you best - this smartphone is powerful enough to keep up with your busy lifestyle."
  },
  {
    "id": 15,
    "name": "Samsung Galaxy J3 Pro (Gold, 16 GB)  (2 GB RAM)",
    "rating": "4.1",
    "brand": "Samsung",
    "price": "₹7,990",
    "os": "Android",
    "camera": "8MP Rear Camera | 5MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/j3orcsw0/mobile/r/p/v/samsung-galaxy-j3-pro-sm-j320fzdgins-original-imaeurqgnaz4puyt.jpeg?q=70",
    "desc": "Did you know a lot of accidents happen because of talking on the phone while riding? Don’t set an example for bad riding. Get the Samsung Galaxy J3 Pro and ride without worrying as when the S bike mode is activated, the callers will be informed with pre-recorded messages that you’re riding."
  },
  {
    "id": 16,
    "name": "Samsung Galaxy S7 Edge (Silver Titanium, 32 GB)",
    "rating": "4.4",
    "brand": "Samsung",
    "price": "₹50,900",
    "stock":"In Stock",
    "os": "Android",
    "camera": "12MP Rear Camera | 5MP Front Camera",
    "imageUrl": "https://rukminim1.flixcart.com/image/832/832/mobile/h/c/v/samsung-galaxy-s7-edge-na-original-imaegmk53n7cnuv6.jpeg?q=70",
    "desc": "Water and Dust Resistant (Capless Water and Dust Resistant IP68), Gear Support"
  }
]