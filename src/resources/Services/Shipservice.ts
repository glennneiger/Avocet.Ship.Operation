export class Shipservice {
  public currentblog: allblog = {};
  public currentship: ShipBank = {} ;
  public currenthydro: Hydro[] = [] ;
  public currentobserved: observed = {};
  public currentallsurvey: surveyresult[] = [];
  public currentsurvey: surveyresult = {} ;
  public currenttanks: Tanks[] = [] ;
  public currentuser: User = new User();
  public myships: ShipBank[] = [];
  public showtankwa: boolean = false;
  public session;
  //public tanktypeandname = tanktypeandname;
}

export interface shiplist {
  Shipname:string;
}

var tanktypeandname = [
  { TankCode: "WB", TankName: "WaterBallast" },
  { TankCode: "FW", TankName: "Fresh Water" },
  { TankCode: "TW", TankName: "Treated Water" },
  { TankCode: "FO", TankName: "Fuel Oil" },
  { TankCode: "DO", TankName: "Diesel Oil" },
  { TankCode: "LO", TankName: "Lub Oil" },
  { TankCode: "HO", TankName: "Hydraulic Oil" },
  { TankCode: "SL", TankName: "Slop Tanks" },
  { TankCode: "BG", TankName: "Bilge Water" },
  { TankCode: "MS", TankName: "Misc Tanks" },
  { TankCode: "ET", TankName: "Environment Tks" }
];
export default tanktypeandname;

export interface allblog {
  Id?: number;
  Category?: string;
  Title?: string;
  Subject?: string;
  Matter?: string;
  Comments?: string;
  Likes?: number;
  StarRating?: number;
  imagemain?: string;
  imagesub?: string;
  createdOn?: number;
  bodysmall?: string;
  filename?: string;
  filelength?: number;
  filetype?: string;
  privatee?: string;
}

export class User {
  ////id?: number;
  ////userId?: string;
  ////code?: string;
  ////pincode?: string;
  ////name?: string;
  ////rank?: string;
  ////email?: string;
  ////started?: string;
  ////finished?: string;
  ////isvalid?: boolean;
  ////transaction?: string;


id?: number;
userId?: string; 
code?: string; 
name?: string; 
rank?: string; 
joined?: string; 
lastlogin?: string;
pincode?: string; 
recovery?: string;
email?: string; 
started?: string;
finished?: number;
edithydro?: number;
emailreport?: number;
directories?: number;
newcondition?: number;
deletecondition?: number;
draftsurvey?: number;
canprint?: number;
isvalid?: boolean;
transaction?: string;
history?: string;
};






















export interface Hydro {
  UserId?: string;
  Draft?: number;
  Displ?: number;
  TPC?: number;
  MCTC?: number;
  LCF?: number;
}

export interface Tanks {

  Id?: number,
  TankType?: string;
  TankCode?: string;
  Tankname?: string;
  TankContent?: string,
  Volume?: number;
  Density?: number;
  Weight?: number;

}

export interface ShipBank {
  Id?: number;
  UserId?: string;
  Shipname?: string;
  Callsign?: string;
  Df?: number;
  Dm?: number;
  Da?: number;
  LBM?: number;
  LBB?: number;
  LIGHTSHIP?: number;
  POR?: string;
  Flag?: string;
  Classification?: string;
  IMONo?: string;
  DWT?: number;
  GRT?: number;
  NRT?: number;
  Sdraft?: number;
  DepthMoulded?: number;
  DepthExtreme?: number;
  Owners?: string;
  Charterers?: string;
  KEELPLATE?: number;
  Managers?: string;
  Operators?: string;
  Breadth?: number;
  Hydro?: string;
  Tanks?: string;
  Notes?: string;
  UOM?: string;
  Master?: string;
  Mate?: string;
}

export interface surveyresult {
  id?: number;
  shipname?: string;
  voyNo?: string;
  userId?: string;
  shipId?: number;
  dated?: string;
  timed?: string;
  port?: string;
  lightship?: string;
  cargotoload?: string;
  fordmark?: string;
  fordcorr?: string;
  fordcorrd?: string;
  fordmean?: string;
  aftmark?: string;
  aftcorr?: string;
  aftcorrd?: string;
  aftmean?: string;
  midmark?: string;
  midcorr?: string;
  midcorrd?: string;
  midmean?: string;
  keel?: string;
  meandraft?: string;
  hogsag?: string;
  hogorsag?: string;
  meanofmean?: string;
  displ?: string;
  trimcorr1?: string;
  trimcorr2?: string;
  dispwcorr?: string;
  listcorr?: string;
  densitycorr?: string;
  displatdensity?: string;
  deductible?: string;
  cargo?: string;
  ballast?: string;
  fuel?: string;
  hydraulicoil?: string;
  slop?: string;
  bilge?: string;
  environment?: string;
  treated?: string;
  diesel?: string;
  gas?: string;
  luboil?: string;
  engineoil?: string;
  freshwater?: string;
  misc?: string;
  constant?: string;
  truetrim?: string;
  lcf?: string;
  tpc?: string;
  mctc1?: string;
  mctc2?: string;
  tpc1?: string;
  tpc2?: string;
  tanks?: string;
  observed?: string;
}
export interface observed {
  FordPort?: number;
  FordStbd?: number;
  AftPort?: number;
  AftStbd?: number;
  MidPort?: number;
  MidStbd?: number;
  Density?: number;
  Constant?: number;
  List?: number;
  Weather?: string;
  Dated?: string;
  Timed?: string;
  VoyNo?: string;
  Port?: string;
  Captain?: string;
  Mate?: string;
  ObsType?: string;
  Berth?: string;
  Cargotoload?: number;
}
