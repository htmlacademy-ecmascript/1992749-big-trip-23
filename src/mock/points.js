const newPoints = [
  {
    'id': 'd7fe4f27-7f30-4822-83c9-9a51ad4f885d',
    'base_price': 562,
    'date_from': '2024-06-18T01:28:07.364Z',
    'date_to': '2024-06-19T16:47:07.364Z',
    'destination': 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    'is_favorite': false,
    'offers': [
      'da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39'
    ],
    'type': 'ship'
  },
  {
    'id': '992d2751-701c-4e75-a29a-3bd637d0956f',
    'base_price': 8347,
    'date_from': '2024-06-20T01:59:07.364Z',
    'date_to': '2024-06-20T13:16:07.364Z',
    'destination': 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    'is_favorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '51579746-6b18-465e-ab62-202f8529448b',
    'base_price': 4954,
    'date_from': '2024-06-21T12:15:07.364Z',
    'date_to': '2024-06-22T06:37:07.364Z',
    'destination': '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    'is_favorite': true,
    'offers': [],
    'type': 'flight'
  },
  {
    'id': 'cde3c3b0-f220-40f5-8abb-00a4afc57eef',
    'base_price': 4425,
    'date_from': '2024-06-23T13:21:07.364Z',
    'date_to': '2024-06-24T18:31:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': true,
    'offers': [
      '666c4bdc-5b92-472d-931e-1359008d7625'
    ],
    'type': 'train'
  },
  {
    'id': '1bb9211f-7337-4bc0-b0f1-bb154f327de8',
    'base_price': 1023,
    'date_from': '2024-06-25T02:08:07.364Z',
    'date_to': '2024-06-26T04:05:07.364Z',
    'destination': '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    'is_favorite': false,
    'offers': [
      'f2448762-9c90-4d9d-9cce-4ad4531bacc6',
      '666c4bdc-5b92-472d-931e-1359008d7625'
    ],
    'type': 'train'
  },
  {
    'id': '7e22e940-af1c-4ae8-9f58-915e65aa2eac',
    'base_price': 7338,
    'date_from': '2024-06-27T21:33:07.364Z',
    'date_to': '2024-06-29T11:51:07.364Z',
    'destination': '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    'is_favorite': true,
    'offers': [
      'bb11b5a1-54c8-4cad-bff3-4e3e130daf24',
      '3c342fea-9f7e-43f7-b707-e2f68945443e',
      '7db912b8-a478-4677-b58e-6a04ebf4c3b4'
    ],
    'type': 'flight'
  },
  {
    'id': '7ccd8ec5-5757-48cd-91d4-dcdb720bd5be',
    'base_price': 2658,
    'date_from': '2024-07-01T11:53:07.364Z',
    'date_to': '2024-07-03T02:13:07.364Z',
    'destination': '570890ce-cb81-443c-9a43-78678678a433',
    'is_favorite': false,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'dcfd929e-9d0a-48db-8041-6ab14a47f559',
    'base_price': 8345,
    'date_from': '2024-07-04T12:15:07.364Z',
    'date_to': '2024-07-05T23:54:07.364Z',
    'destination': '570890ce-cb81-443c-9a43-78678678a433',
    'is_favorite': true,
    'offers': [
      'cd0dfc92-1928-4feb-af70-1a44df73e49f',
      '75237586-adb2-41f7-9562-5d0d780c8412'
    ],
    'type': 'check-in'
  },
  {
    'id': '3289d976-4486-40dd-9f6d-6a0d8dcd1de8',
    'base_price': 2243,
    'date_from': '2024-07-07T14:45:07.364Z',
    'date_to': '2024-07-08T05:43:07.364Z',
    'destination': '6f0d0a81-22bd-482b-949f-65db24a0a593',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'fae6bfd6-06c1-4c46-82af-16e35a9a7114',
    'base_price': 9140,
    'date_from': '2024-07-10T00:11:07.364Z',
    'date_to': '2024-07-11T22:55:07.364Z',
    'destination': '6ae9f746-9662-483b-aeee-036f3a06b92d',
    'is_favorite': true,
    'offers': [
      'b3f82299-bd1a-4477-83d1-1fcee825bbb0',
      'da88008a-b0f1-4dd9-8f5a-49c4a4ea7a39'
    ],
    'type': 'ship'
  },
  {
    'id': '9fa8fb7d-ee5d-47f9-b0d9-33b983614d04',
    'base_price': 6368,
    'date_from': '2024-07-12T18:54:07.364Z',
    'date_to': '2024-07-14T14:08:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': false,
    'offers': [
      'cd0dfc92-1928-4feb-af70-1a44df73e49f',
      '75237586-adb2-41f7-9562-5d0d780c8412'
    ],
    'type': 'check-in'
  },
  {
    'id': 'cff47da3-fa1b-46af-97c0-901c5a6d77ea',
    'base_price': 4574,
    'date_from': '2024-07-15T17:58:07.364Z',
    'date_to': '2024-07-16T11:21:07.364Z',
    'destination': '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    'is_favorite': false,
    'offers': [
      '3c342fea-9f7e-43f7-b707-e2f68945443e',
      '7db912b8-a478-4677-b58e-6a04ebf4c3b4'
    ],
    'type': 'flight'
  },
  {
    'id': '5d4c4bb3-407f-4969-a728-e483135eaa15',
    'base_price': 9096,
    'date_from': '2024-07-18T08:04:07.364Z',
    'date_to': '2024-07-20T08:37:07.364Z',
    'destination': '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    'is_favorite': false,
    'offers': [
      '98aed58a-b092-4cbd-b6b7-f91e9f8a3221',
      'ac939d9e-5cd1-4a3b-b8ac-727d1c4084b3'
    ],
    'type': 'restaurant'
  },
  {
    'id': '432bd7f1-dc74-4170-a2ef-61a183352387',
    'base_price': 9381,
    'date_from': '2024-07-21T07:48:07.364Z',
    'date_to': '2024-07-22T20:25:07.364Z',
    'destination': '6f0d0a81-22bd-482b-949f-65db24a0a593',
    'is_favorite': false,
    'offers': [
      '666c4bdc-5b92-472d-931e-1359008d7625'
    ],
    'type': 'train'
  },
  {
    'id': '3d20836a-ece0-41ce-80d2-e9341908c907',
    'base_price': 817,
    'date_from': '2024-07-23T09:15:07.364Z',
    'date_to': '2024-07-24T02:48:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': true,
    'offers': [],
    'type': 'sightseeing'
  },
  {
    'id': 'ac71894f-23dd-4ac0-bdad-6225f5ca9380',
    'base_price': 8627,
    'date_from': '2024-07-25T02:31:07.364Z',
    'date_to': '2024-07-25T10:49:07.364Z',
    'destination': 'cde4182a-6c82-4de6-9b68-c7f2c2452f67',
    'is_favorite': true,
    'offers': [
      '6165ac14-30fa-4379-a8c4-12310b1a8693',
      'f2448762-9c90-4d9d-9cce-4ad4531bacc6',
      '666c4bdc-5b92-472d-931e-1359008d7625'
    ],
    'type': 'train'
  },
  {
    'id': '369c74b8-a645-4523-9f7e-6f3b7455e5d6',
    'base_price': 8376,
    'date_from': '2024-07-26T17:47:07.364Z',
    'date_to': '2024-07-28T14:14:07.364Z',
    'destination': '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    'is_favorite': true,
    'offers': [
      '2b8d3044-a1ab-46e6-a5ed-9ea129e06d8c',
      '224a68db-3228-4795-a8f7-d8fe7d277961',
      '54f0f8c5-8aba-4145-b222-e31104c15744',
      'bb11b5a1-54c8-4cad-bff3-4e3e130daf24',
      '3c342fea-9f7e-43f7-b707-e2f68945443e',
      '7db912b8-a478-4677-b58e-6a04ebf4c3b4'
    ],
    'type': 'flight'
  },
  {
    'id': '528fbe7e-d7f8-4d21-8251-09029e08261b',
    'base_price': 9299,
    'date_from': '2024-07-30T07:53:07.364Z',
    'date_to': '2024-07-30T16:13:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': false,
    'offers': [
      '6165ac14-30fa-4379-a8c4-12310b1a8693',
      'f2448762-9c90-4d9d-9cce-4ad4531bacc6',
      '666c4bdc-5b92-472d-931e-1359008d7625'
    ],
    'type': 'train'
  },
  {
    'id': '442d8f39-1f2e-4f0a-9cb4-0301d2dd6e60',
    'base_price': 7252,
    'date_from': '2024-07-31T15:14:07.364Z',
    'date_to': '2024-08-01T12:54:07.364Z',
    'destination': '938f2e20-aea8-43a9-9bd7-49333d78cc58',
    'is_favorite': false,
    'offers': [
      'e887140a-118b-404a-be12-62250e4be9c1',
      '3209ff9e-f4cb-4de2-98b6-06040e8ed1b8'
    ],
    'type': 'drive'
  },
  {
    'id': '481cc75d-5db8-4ddf-bb20-b75ed6349f26',
    'base_price': 2142,
    'date_from': '2024-08-02T08:56:07.364Z',
    'date_to': '2024-08-02T22:41:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': true,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': 'f18c47ed-835c-49af-ad5c-85bc42371549',
    'base_price': 7712,
    'date_from': '2024-08-03T07:33:07.364Z',
    'date_to': '2024-08-03T21:30:07.364Z',
    'destination': 'fd711e58-3cac-43b8-a3ce-cfda284d3fcc',
    'is_favorite': false,
    'offers': [],
    'type': 'ship'
  },
  {
    'id': '58f4c9cc-6d3f-4c5f-b2e7-ea05049b3afa',
    'base_price': 9726,
    'date_from': '2024-08-05T08:04:07.364Z',
    'date_to': '2024-08-07T03:56:07.364Z',
    'destination': '38f3ccb5-14dd-48ac-9d9b-8e47d51053c9',
    'is_favorite': false,
    'offers': [],
    'type': 'drive'
  },
  {
    'id': 'db684436-2e26-452f-8239-95ded09e2288',
    'base_price': 7594,
    'date_from': '2024-08-08T02:10:07.364Z',
    'date_to': '2024-08-09T04:20:07.364Z',
    'destination': 'e1844f36-98ed-43d2-8663-0ea4c3dc9c90',
    'is_favorite': false,
    'offers': [
      '0c961ae0-a71d-4bf8-9b3d-b7399b41f95c',
      'cd0dfc92-1928-4feb-af70-1a44df73e49f',
      '75237586-adb2-41f7-9562-5d0d780c8412'
    ],
    'type': 'check-in'
  },
  {
    'id': '01870404-24b7-411d-97f8-5565520e97cb',
    'base_price': 5194,
    'date_from': '2024-08-10T04:13:07.364Z',
    'date_to': '2024-08-10T15:56:07.364Z',
    'destination': 'ee996048-2365-475d-9547-3ae95f553d80',
    'is_favorite': true,
    'offers': [
      'cd0dfc92-1928-4feb-af70-1a44df73e49f',
      '75237586-adb2-41f7-9562-5d0d780c8412'
    ],
    'type': 'check-in'
  },
  {
    'id': 'c194fe78-d08f-4a0d-9e82-d3b25a1c555a',
    'base_price': 177,
    'date_from': '2024-08-12T11:46:07.364Z',
    'date_to': '2024-08-12T20:02:07.364Z',
    'destination': 'cde4182a-6c82-4de6-9b68-c7f2c2452f67',
    'is_favorite': true,
    'offers': [
      '3c8441f6-ab42-4f11-b71d-70d36c52a557',
      'dfdc8d23-201b-4207-a1cc-98db868782f6',
      'e8a21320-37c3-4dc9-bab9-3e826fe8a5e7'
    ],
    'type': 'bus'
  }
];

const getPoints = () => newPoints.map(({
  'id': id,
  'base_price': basePrice,
  'date_from': dateFrom,
  'date_to': dateTo,
  'destination': destination,
  'is_favorite': isFavorite,
  'offers': offers,
  'type': type
}) => ({
  id,
  basePrice,
  dateFrom,
  dateTo,
  destination,
  isFavorite,
  offers,
  type
}));

const points = getPoints();

export { points };

