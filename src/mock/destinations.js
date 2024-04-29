const newDestinations = [
  {
    'id': 'fd711e58-3cac-43b8-a3ce-cfda284d3fcc',
    'description': '',
    'name': 'Oslo',
    'pictures': []
  },
  {
    'id': '570890ce-cb81-443c-9a43-78678678a433',
    'description': 'Kioto - with an embankment of a mighty river as a centre of attraction',
    'name': 'Kioto',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/10.jpg',
        'description': 'Kioto famous for its crowded street markets with the best street food in Asia'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Kioto with a beautiful old town'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/17.jpg',
        'description': 'Kioto a true asian pearl'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/3.jpg',
        'description': 'Kioto in a middle of Europe'
      }
    ]
  },
  {
    'id': 'cde4182a-6c82-4de6-9b68-c7f2c2452f67',
    'description': 'Sochi - famous for its crowded street markets with the best street food in Asia',
    'name': 'Sochi',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Sochi with a beautiful old town'
      }
    ]
  },
  {
    'id': '6f0d0a81-22bd-482b-949f-65db24a0a593',
    'description': 'Saint Petersburg - a true asian pearl',
    'name': 'Saint Petersburg',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/19.jpg',
        'description': 'Saint Petersburg with crowded streets'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/11.jpg',
        'description': 'Saint Petersburg middle-eastern paradise'
      }
    ]
  },
  {
    'id': 'ee996048-2365-475d-9547-3ae95f553d80',
    'description': 'Venice - a true asian pearl',
    'name': 'Venice',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Venice in a middle of Europe'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Venice middle-eastern paradise'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/12.jpg',
        'description': 'Venice a perfect place to stay with a family'
      }
    ]
  },
  {
    'id': 'cd23a18e-0a10-4d4e-b6a7-a39ea89f53bb',
    'description': '',
    'name': 'Amsterdam',
    'pictures': []
  },
  {
    'id': 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    'description': '',
    'name': 'Tokio',
    'pictures': []
  },
  {
    'id': '6ae9f746-9662-483b-aeee-036f3a06b92d',
    'description': 'Nagasaki - for those who value comfort and coziness',
    'name': 'Nagasaki',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/1.jpg',
        'description': 'Nagasaki for those who value comfort and coziness'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Nagasaki in a middle of Europe'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/5.jpg',
        'description': 'Nagasaki is a beautiful city'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/20.jpg',
        'description': 'Nagasaki for those who value comfort and coziness'
      },
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/9.jpg',
        'description': 'Nagasaki for those who value comfort and coziness'
      }
    ]
  },
  {
    'id': '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    'description': 'Madrid - for those who value comfort and coziness',
    'name': 'Madrid',
    'pictures': [
      {
        'src': 'https://23.objects.htmlacademy.pro/static/destinations/6.jpg',
        'description': 'Madrid full of of cozy canteens where you can try the best coffee in the Middle East'
      }
    ]
  },
  {
    'id': '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    'description': 'Vien - with crowded streets',
    'name': 'Vien',
    'pictures': []
  }
];

const getDestinations = () => newDestinations.map(({
  'id': id,
  'description': description,
  'name': name,
  'pictures': pictures
}) => ({
  id,
  description,
  name,
  pictures
}));

const destinations = getDestinations();

const getNames = () => destinations.map((item) => item.name);
const namesDestination = getNames();

export { namesDestination, destinations };
