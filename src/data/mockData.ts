import { ServiceItem, Review, StoreLocation } from '../types';

export const STORE_LOCATIONS: StoreLocation[] = [
  {
    id: 'kamloops',
    name: 'Kamloops Store & HQ',
    address: '1346 Battle St.',
    city: 'Kamloops',
    postalCode: 'V2C 2N8',
    phone: '250-374-5625',
    phoneRaw: '2503745625',
    hours: 'Monday - Friday: 8:30am - 5:00pm',
    onCallInfo: '24/7 Mobile Service on Call Evenings, Weekends & Holidays',
    mapEmbedUrl: 'https://maps.google.com/maps?q=1346+Battle+St,+Kamloops,+BC+V2C+2N8&t=&z=14&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 50.6745, lng: -120.3273 }
  },
  {
    id: '100mile',
    name: '100 Mile House Location',
    address: 'Box 82, #2 - 407 Alder Ave.',
    city: '100 Mile House',
    postalCode: 'V0K 2E0',
    phone: '250-395-4728',
    phoneRaw: '2503954728',
    hours: 'Monday - Friday: 9:00am - 4:00pm',
    onCallInfo: 'Mobile Service Serving the entire Cariboo area & more',
    mapEmbedUrl: 'https://maps.google.com/maps?q=407+Alder+Ave,+100+Mile+House,+BC+V0K+2E0&t=&z=14&ie=UTF8&iwloc=&output=embed',
    coordinates: { lat: 51.6444, lng: -121.2958 }
  }
];

export const SERVICE_AREAS = [
  'Kamloops', '100 Mile House', 'Williams Lake', 'Clinton', 'Cache Creek',
  'Ashcroft', 'Spences Bridge', 'Lytton', 'Lillooet', 'Savona', 'Barriere',
  'Little Fort', 'Clearwater', 'Blue River', 'Valemount', 'Chase', 'Sorrento',
  'Scotch Creek', 'Celista', 'Salmon Arm', 'Revelstoke', 'Golden', 'Vernon',
  'Penticton', 'Osoyoos', 'Merritt', 'Logan Lake'
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'commercial-guards',
    title: 'Commercial Security & Cylinder Guards',
    category: 'commercial',
    shortDesc: 'Prevent thieves from pulling off lock cylinders with high-security heavy duty steel cylinder guards.',
    fullDesc: 'Commercial break-ins are on the rise in Kamloops and the BC Interior. Standard storefront mortise lock cylinders can be forcibly pulled by thieves. Our high-security cylinder guards create an impenetrable protective shield over your lock mechanism, deterring break-ins before they happen.',
    iconName: 'ShieldAlert',
    highlights: ['Prevents Cylinder Pulling', 'Heavy Steel Shielding', 'Fits Most Storefront Doors', 'Emergency B&E Repairs'],
    imagePlaceholder: 'commercial_security',
    popular: true
  },
  {
    id: 'automotive-keys',
    title: 'Automotive Transponder Keys & Unlocks',
    category: 'automotive',
    shortDesc: 'Lost your vehicle keys? We program transponder keys, prox fobs, and unlock cars 24/7.',
    fullDesc: 'No keys? No problem! Our state-of-the-art MVP Pro diagnostic programmers can replace lost keys for all standard vehicles, GMC trucks, domestic and import transponder keys, and proximity remotes directly at your location. We save you hundreds compared to dealership prices.',
    iconName: 'KeyRound',
    highlights: ['On-Site Key Programming', 'MVP Pro Diagnostics', 'Emergency Auto Lockouts', 'Ignition Key Extraction'],
    imagePlaceholder: 'automotive_keys',
    popular: true
  },
  {
    id: 'mul-t-lock',
    title: 'Mul-T-Lock High Security Dealer',
    category: 'keys',
    shortDesc: 'Authorized dealer for Mul-T-Lock restricted key systems with strict "DO NOT COPY" control.',
    fullDesc: 'As one of the largest Mul-T-Lock dealers in the province, Interior Locksmith provides ultra-high-security patented key systems. "DO NOT COPY" stamped on standard keys does not stop illegal duplication—our restricted key cards guarantee nobody can make extra copies of your keys without your express authorization.',
    iconName: 'LockKeyhole',
    highlights: ['Authorized Mul-T-Lock Dealer', 'Patented Key Control', 'Restricted Key Cards', 'Pick & Drill Resistant'],
    imagePlaceholder: 'mul_t_lock',
    popular: true
  },
  {
    id: 'safes-vaults',
    title: 'Safe Openings, Service & Repair',
    category: 'safes',
    shortDesc: 'Expert opening and maintenance for antique safes, modern dial/digital safes, and time locks.',
    fullDesc: 'Safe won’t open? Lost combinations, sticky safe doors, locked time locks, or broken dials are expertly handled by our senior technicians. From antique safes like J.&J. Taylor Toronto Safe Works to high-tech digital gun safes, we perform non-destructive or clean openings and combination changes.',
    iconName: 'Vault',
    highlights: ['Antique & Modern Safes', 'Combination Changes', 'Time Lock Repairs', 'Dial & Digital Retrofits'],
    imagePlaceholder: 'safe_opening'
  },
  {
    id: 'residential-rekey',
    title: 'Residential Rekeying & Lock Replacement',
    category: 'residential',
    shortDesc: 'Re-key your existing locks to keep costs minimal when taking possession of a new home.',
    fullDesc: 'Moving into a new home or had staff changes? In most cases, you don’t need to buy expensive new lock hardware. Our locksmiths can re-key your existing locks so old keys no longer work, keeping expenses to a minimum while ensuring complete security peace of mind.',
    iconName: 'Home',
    highlights: ['Cost-Saving Rekeying', 'High-Security Deadbolts', 'Emergency House Lockouts', 'Master Keying'],
    imagePlaceholder: 'residential_rekey'
  },
  {
    id: 'electronic-access',
    title: 'Electronic Access Control & SMARTAIR',
    category: 'access-control',
    shortDesc: 'Smart digital door locks, automated timed locking, and wireless access control solutions.',
    fullDesc: 'From timed entrance doors that lock and unlock automatically according to your business hours, to full electronic SMARTAIR access control systems that restrict entrance to authorized RFID card or PIN holders, we tailor modern electronic access solutions to your specific needs.',
    iconName: 'Cpu',
    highlights: ['SMARTAIR Systems', 'Automated Door Schedules', 'Keycard & FOB Access', 'Audit Trail Logging'],
    imagePlaceholder: 'electronic_access'
  },
  {
    id: 'break-enter-repair',
    title: 'Break & Enter Emergency Repairs',
    category: 'commercial',
    shortDesc: '24/7 emergency response to re-secure storefronts, broken frames, and compromised locks after break-ins.',
    fullDesc: 'Experiencing a break-in is stressful. Our 6 mobile service vans are available 24 hours a day to repair damaged doors, replace compromised lock cylinders, install latch guards, and ensure your building is fully secured before nightfall.',
    iconName: 'Flame',
    highlights: ['24/7 Immediate Dispatch', 'Door & Frame Repairs', 'Temporary Board-Up Assistance', 'High-Security Upgrades'],
    imagePlaceholder: 'break_enter_repair'
  },
  {
    id: 'precision-key-cutting',
    title: 'Precision Key Cutting & Specialty Keys',
    category: 'keys',
    shortDesc: 'Precision key cutting for house, padlocks, classic cars, motorcycles, and specialty machinery.',
    fullDesc: 'Whether you drop into our Kamloops or 100 Mile House store or we come to you in one of our service vans, our high-precision key cutting machinery ensures your keys turn smoothly the very first time. We stock thousands of specialty key blanks.',
    iconName: 'Scissors',
    highlights: ['First-Time Perfect Cut', 'Harley Davidson & Motorcycles', 'Heavy Machinery Keys', 'Storefront Quick Cut'],
    imagePlaceholder: 'precision_key_cutting'
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: '1',
    author: 'D H',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'Excellent service! My vehicle key had difficulty opening the door lock and turning the ignition. Instead of taking it to the dealership and being charged an arm and leg I brought it here where the problem was quickly diagnosed as a worn out key and replaced with a brand new one that worked super slick. Highly recommend this place! Plus they were open on the weekend!',
    serviceCategory: 'Automotive Key Replacement'
  },
  {
    id: '2',
    author: 'John Hack',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'Fantastic service. Went above and beyond to make a Harley Davidson key. Plus Danielle followed up to ensure all went well. Highly recommend their service.',
    serviceCategory: 'Motorcycle / Specialty Key'
  },
  {
    id: '3',
    author: 'Tyler Lopez',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'Was coming into Vancouver and had to stop over in Kamloops. My key broken in the ignition. The owner answered my late call at 9:30 Pm on Sunday and gave me three choices. Will always recommend this place, wasn\'t out to make be most money but just wanted to provide an honest reliable service. Thank you again!',
    serviceCategory: '24/7 Emergency Auto Lockout'
  },
  {
    id: '4',
    author: 'Nikolas Oliver',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'I called today at noon for same-day service and they were at my location within 2 hours. Kelly was very personable and knowledgeable and he even brought a vacuum to clean up the mess. I would recommend Interior Locksmith and will use again. Thanks!',
    serviceCategory: 'Same-Day On-Site Locksmith'
  },
  {
    id: '5',
    author: 'Jennifer Lord',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'I can\'t say enough about this company. I would recommend them to everyone. Excellent service, friendly, nothing is a problem for them. Thank you',
    serviceCategory: 'Commercial & Home Lock Repair'
  },
  {
    id: '6',
    author: 'Susan Cullum',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'I had the most amazing service from this husband & wife team!!!! They answered my questions, did the necessary work & are the most pleasant business people I have met in a long long time!! Many thanks & I will recommend',
    serviceCategory: 'Family-Owned Security Service'
  },
  {
    id: '7',
    author: 'Erin Delorme',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'Excellent customer service! Interior Locksmith\'s are incredibly knowledgeable, courteous and efficient. 100% recommend them for any of your locksmith needs!',
    serviceCategory: 'General Locksmithing'
  },
  {
    id: '8',
    author: 'Bonnie Bauer',
    rating: 5,
    badge: '5 STAR REVIEW',
    text: 'Exceptional service. Went above and beyond to get my car started. Best customer service I\'ve had in a long time.',
    serviceCategory: 'Emergency Vehicle Repair'
  }
];

export const FAMOUS_STAFF_MEMBER = {
  name: 'Barnaby',
  role: 'Chief Morale Officer & Store Security Dog',
  breed: 'Golden Retriever Mix',
  bio: 'Barnaby is our most famous staff member at Interior Locksmith! While our 12 human locksmiths handle transponders, safe dials, and high-security cylinder guards, Barnaby inspects key quality, provides therapeutic ear scratches to waiting customers, and maintains 100% shop morale.',
  stats: {
    keysInspected: '14,200+',
    tailWagsPerMin: '120',
    treatsApproved: '9,850'
  }
};
