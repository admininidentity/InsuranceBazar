export interface IdentityRecord {
  id: string;
  customerId: string;
  name: string;
  dob: string;
  aadhar: string;
  pan: string;
  phone: string; 
  email: string;
  status: 'Verified' | 'Pending' | 'Flagged';
}

export const SAMPLE_DATA: IdentityRecord[] = [
{ id: '1', customerId: 'FS-1001', name: 'Arjun Sharma', dob: '12/05/1985', aadhar: '2850 6014 1728', pan: 'BAJPC4350M', phone: '+91 98724 90783', email: 'arjun.s@example.com', status: 'Verified' },
  { id: '2', customerId: 'FS-1002', name: 'Priya Patel', dob: '22/08/1992', aadhar: '2032 0320 0566', pan: 'DAJPC4150P', phone: '+91 9762905382', email: 'priya.p@example.com', status: 'Verified' },
  { id: '3', customerId: 'FS-1003', name: 'Rahul Verma', dob: '05/11/1988', aadhar: '2514 9575 5785', pan: 'XGZFE7225A', phone: '+91 9676582779', email: 'rahul.v@example.com', status: 'Pending' },
  { id: '4', customerId: 'FS-1004', name: 'Ananya Iyer', dob: '14/02/1995', aadhar: '2618 9284 9130', pan: 'CTUGE1616I', phone: '+91 9596897373', email: 'ananya.i@example.com', status: 'Verified' },
  { id: '5', customerId: 'FS-1005', name: 'Vikram Singh', dob: '30/09/1982', aadhar: '2453 0139 4604', pan: 'PEVFV4506Y', phone: '+91 9483682738', email: 'vikram.s@example.com', status: 'Flagged' },
  { id: '6', customerId: 'FS-1006', name: 'Sneha Reddy', dob: '18/07/1990', aadhar: '2719 6743 5799', pan: 'UWPCL6780T', phone: '+91 9396398622', email: 'sneha.r@example.com', status: 'Verified' },
  { id: '7', customerId: 'FS-1007', name: 'Aditya Gupta', dob: '25/12/1987', aadhar: '2153 9800 1948', pan: 'LQDTD5444T', phone: '+91 9255146748', email: 'aditya.g@example.com', status: 'Verified' },
  { id: '8', customerId: 'FS-1008', name: 'Ishita Das', dob: '09/03/1993', aadhar: '2953 4684 1943', pan: 'YUGFJ2046V', phone: '+91 9142080600', email: 'ishita.d@example.com', status: 'Pending' },
  { id: '9', customerId: 'FS-1009', name: 'Karan Malhotra', dob: '11/06/1984', aadhar: '2417 6068 1143', pan: 'DDWCH0856B', phone: '+91 8819926322', email: 'karan.m@example.com', status: 'Verified' },
  { id: '10', customerId: 'FS-1010', name: 'Meera Nair', dob: '21/01/1991', aadhar: '2338 3732 1773', pan: 'NLXBC1905E', phone: '+91 8970552011', email: 'meera.n@example.com', status: 'Verified' },
  { id: '11', customerId: 'FS-1011', name: 'Siddharth Rao', dob: '03/04/1986', aadhar: '2435 2362 4742', pan: 'GFQJR7008X', phone: '+91 8734663002', email: 'sid.rao@example.com', status: 'Verified' },
  { id: '12', customerId: 'FS-1012', name: 'Tanvi Joshi', dob: '17/10/1994', aadhar: '2046 0970 7824', pan: 'BAJPC4350M', phone: '+91 8682147786', email: 'tanvi.j@example.com', status: 'Flagged' },
  { id: '13', customerId: 'FS-1013', name: 'Rohan Deshmukh', dob: '28/05/1989', aadhar: '2078 5819 0460', pan: 'DAJPC4150P', phone: '+91 8508555344', email: 'rohan.d@example.com', status: 'Verified' },
  { id: '14', customerId: 'FS-1014', name: 'Kavya Menon', dob: '12/12/1993', aadhar: '2295 0472 1596', pan: 'XGZFE7225A', phone: '+91 7892806725', email: 'kavya.m@example.com', status: 'Verified' },
  { id: '15', customerId: 'FS-1015', name: 'Abhishek Bose', dob: '07/07/1983', aadhar: '9999 4105 7058', pan: 'CTUGE1616I', phone: '+91 7998507691', email: 'abhishek.b@example.com', status: 'Pending' },
  { id: '16', customerId: 'FS-1016', name: 'Zoya Khan', dob: '19/09/1996', aadhar: '9999 7165 8847', pan: 'PEVFV4506Y', phone: '+91 7084799325', email: 'zoya.k@example.com', status: 'Verified' },
  { id: '17', customerId: 'FS-1017', name: 'Manish Pandey', dob: '24/04/1981', aadhar: '9999 3311 9405', pan: 'UWPCL6780T', phone: '+91 7281035247', email: 'manish.p@example.com', status: 'Verified' },
  { id: '18', customerId: 'FS-1018', name: 'Riya Saxena', dob: '15/02/1994', aadhar: '8384 2795 9970', pan: 'LQDTD5444T', phone: '+91 7304305530', email: 'riya.s@example.com', status: 'Verified' },
  { id: '19', customerId: 'FS-1019', name: 'Varun Bhatia', dob: '02/11/1987', aadhar: '9999 5518 3433', pan: 'YUGFJ2046V', phone: '+91 7447198519', email: 'varun.b@example.com', status: 'Verified' },
  { id: '20', customerId: 'FS-1020', name: 'Deepika Choudhury', dob: '10/08/1992', aadhar: '9999 9050 1894', pan: 'DDWCH0856B', phone: '+91 7515365663', email: 'deepika.c@example.com', status: 'Verified' },
];



