import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string with format `Y-m-d`, e.g. `2011-05-23`. */
  Date: any;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** A datetime and timezone string in ISO 8601 format `Y-m-dTH:i:sO`, e.g. `2020-04-20T13:53:12+02:00`. */
  DateTimeTz: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

export type Blog = {
  __typename?: 'Blog';
  CategoriaBlog?: Maybe<CategoriaBlog>;
  blogId?: Maybe<Scalars['Int']>;
  categoriaBlogId?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaBlog?: Maybe<Scalars['String']>;
  descripcionLargaBlog?: Maybe<Scalars['String']>;
  destacadoBlog?: Maybe<Scalars['String']>;
  estadoBlog?: Maybe<Scalars['String']>;
  galeriaBlog?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalBlog?: Maybe<Imagenes>;
  imagenSecundariaBlog?: Maybe<Imagenes>;
  keywordsBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloBlog?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type BlogInput = {
  blogId?: Maybe<Scalars['Int']>;
  descripcionCortaBlog?: Maybe<Scalars['String']>;
  descripcionLargaBlog?: Maybe<Scalars['String']>;
  destacadoBlog?: Maybe<Scalars['String']>;
  estadoBlog?: Maybe<Scalars['String']>;
  galeriaBlog?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalBlog?: Maybe<Scalars['Int']>;
  imagenSecundariaBlog?: Maybe<Scalars['Int']>;
  keywordsBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloBlog?: Maybe<Scalars['String']>;
};

export type CambiarContrasenaInput = {
  passwordAntiguo?: Maybe<Scalars['String']>;
  passwordNuevo?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type Categoria = {
  __typename?: 'Categoria';
  categoriaId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  estadoCategoria?: Maybe<Scalars['String']>;
  imagenPrincipalCategoria?: Maybe<Imagenes>;
  imagenSecundariaCategoria?: Maybe<Imagenes>;
  keywordsCategoria?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  tituloCategoria?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlog = {
  __typename?: 'CategoriaBlog';
  categoriaBlogId?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCategoriaBlog?: Maybe<Scalars['String']>;
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: Maybe<Imagenes>;
  imagenSecundariaCategoriaBlog?: Maybe<Imagenes>;
  keywordsCategoriaBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloCategoriaBlog?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type CategoriaBlogInput = {
  categoriaBlogId?: Maybe<Scalars['Int']>;
  descripcionCategoriaBlog?: Maybe<Scalars['String']>;
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
  imagenPrincipalCategoriaBlog?: Maybe<Scalars['Int']>;
  imagenSecundariaCategoriaBlog?: Maybe<Scalars['Int']>;
  keywordsCategoriaBlog?: Maybe<Scalars['String']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
  tituloCategoriaBlog?: Maybe<Scalars['String']>;
};

export type CategoriaInput = {
  categoriaId?: Maybe<Scalars['Int']>;
  descripcion?: Maybe<Scalars['String']>;
  estadoCategoria?: Maybe<Scalars['String']>;
  imagenPrincipalCategoria?: Maybe<Scalars['Int']>;
  imagenSecundariaCategoria?: Maybe<Scalars['Int']>;
  keywordsCategoria?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  tituloCategoria?: Maybe<Scalars['String']>;
};

export type Crucero = {
  __typename?: 'Crucero';
  Categoria?: Maybe<Categoria>;
  actividadesCrucero?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadCrucero?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  cruceroId?: Maybe<Scalars['Int']>;
  descripcionCortaCrucero?: Maybe<Scalars['String']>;
  descripcionLargaCrucero?: Maybe<Scalars['String']>;
  destacadoCrucero?: Maybe<Scalars['String']>;
  estadoCrucero?: Maybe<Scalars['String']>;
  galeriaCrucero?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalCrucero?: Maybe<Imagenes>;
  imagenSecundariaCrucero?: Maybe<Imagenes>;
  incluyeCrucero?: Maybe<Scalars['String']>;
  itinerarioCrucero?: Maybe<Scalars['String']>;
  keywordsCrucero?: Maybe<Scalars['String']>;
  noIncluyeCrucero?: Maybe<Scalars['String']>;
  notasCrucero?: Maybe<Scalars['String']>;
  politicasCrucero?: Maybe<Scalars['String']>;
  puntoPartidaCrucero?: Maybe<Scalars['String']>;
  regionCrucero?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugCrucero?: Maybe<Scalars['String']>;
  tituloCrucero?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionCrucero?: Maybe<Scalars['String']>;
};

export type CruceroInput = {
  actividadesCrucero?: Maybe<Scalars['String']>;
  ciudadCrucero?: Maybe<Scalars['String']>;
  cruceroId?: Maybe<Scalars['Int']>;
  descripcionCortaCrucero?: Maybe<Scalars['String']>;
  descripcionLargaCrucero?: Maybe<Scalars['String']>;
  destacadoCrucero?: Maybe<Scalars['String']>;
  estadoCrucero?: Maybe<Scalars['String']>;
  galeriaCrucero?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalCrucero?: Maybe<Scalars['Int']>;
  imagenSecundariaCrucero?: Maybe<Scalars['Int']>;
  incluyeCrucero?: Maybe<Scalars['String']>;
  itinerarioCrucero?: Maybe<Scalars['String']>;
  keywordsCrucero?: Maybe<Scalars['String']>;
  noIncluyeCrucero?: Maybe<Scalars['String']>;
  notasCrucero?: Maybe<Scalars['String']>;
  politicasCrucero?: Maybe<Scalars['String']>;
  puntoPartidaCrucero?: Maybe<Scalars['String']>;
  regionCrucero?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugCrucero?: Maybe<Scalars['String']>;
  tituloCrucero?: Maybe<Scalars['String']>;
  videoPresentacionCrucero?: Maybe<Scalars['String']>;
};

export type GetAllBlog = {
  __typename?: 'GetAllBlog';
  data?: Maybe<Array<Blog>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllCrucero = {
  __typename?: 'GetAllCrucero';
  data?: Maybe<Array<Crucero>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllLunaMiel = {
  __typename?: 'GetAllLunaMiel';
  data?: Maybe<Array<LunaMiel>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllSuscripciones = {
  __typename?: 'GetAllSuscripciones';
  data?: Maybe<Array<Suscripcion>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllTour = {
  __typename?: 'GetAllTour';
  data?: Maybe<Array<Tour>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type GetAllUsers = {
  __typename?: 'GetAllUsers';
  data?: Maybe<Array<User>>;
  nroTotalItems?: Maybe<Scalars['Int']>;
};

export type HorarioTour = {
  __typename?: 'HorarioTour';
  created_at?: Maybe<Scalars['DateTime']>;
  cupos?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  fecha?: Maybe<Scalars['String']>;
  hora?: Maybe<Scalars['String']>;
  horarioTourId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type HorarioTourInput = {
  cupos?: Maybe<Scalars['Int']>;
  estado?: Maybe<Scalars['String']>;
  fecha?: Maybe<Scalars['String']>;
  hora?: Maybe<Scalars['String']>;
  horarioTourId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tourId?: Maybe<Scalars['Int']>;
};

export type Imagenes = {
  __typename?: 'Imagenes';
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
};

export type ImagenesInput = {
  created_at?: Maybe<Scalars['DateTime']>;
  descripcion?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  url?: Maybe<Scalars['String']>;
};

export type LunaMiel = {
  __typename?: 'LunaMiel';
  Categoria?: Maybe<Categoria>;
  actividadesLuna?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadLuna?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaLuna?: Maybe<Scalars['String']>;
  descripcionLargaLuna?: Maybe<Scalars['String']>;
  destacadoLuna?: Maybe<Scalars['String']>;
  estadoLuna?: Maybe<Scalars['String']>;
  galeriaLuna?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalLuna?: Maybe<Imagenes>;
  imagenSecundariaLuna?: Maybe<Imagenes>;
  incluyeLuna?: Maybe<Scalars['String']>;
  itinerarioLuna?: Maybe<Scalars['String']>;
  keywordsLuna?: Maybe<Scalars['String']>;
  lunaMielId?: Maybe<Scalars['Int']>;
  noIncluyeLuna?: Maybe<Scalars['String']>;
  notasLuna?: Maybe<Scalars['String']>;
  politicasLuna?: Maybe<Scalars['String']>;
  puntoPartidaLuna?: Maybe<Scalars['String']>;
  regionLuna?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugLuna?: Maybe<Scalars['String']>;
  tituloLuna?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionLuna?: Maybe<Scalars['String']>;
};

export type LunaMielInput = {
  actividadesLuna?: Maybe<Scalars['String']>;
  ciudadLuna?: Maybe<Scalars['String']>;
  descripcionCortaLuna?: Maybe<Scalars['String']>;
  descripcionLargaLuna?: Maybe<Scalars['String']>;
  destacadoLuna?: Maybe<Scalars['String']>;
  estadoLuna?: Maybe<Scalars['String']>;
  galeriaLuna?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalLuna?: Maybe<Scalars['Int']>;
  imagenSecundariaLuna?: Maybe<Scalars['Int']>;
  incluyeLuna?: Maybe<Scalars['String']>;
  itinerarioLuna?: Maybe<Scalars['String']>;
  keywordsLuna?: Maybe<Scalars['String']>;
  lunaMielId?: Maybe<Scalars['Int']>;
  noIncluyeLuna?: Maybe<Scalars['String']>;
  notasLuna?: Maybe<Scalars['String']>;
  politicasLuna?: Maybe<Scalars['String']>;
  puntoPartidaLuna?: Maybe<Scalars['String']>;
  regionLuna?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugLuna?: Maybe<Scalars['String']>;
  tituloLuna?: Maybe<Scalars['String']>;
  videoPresentacionLuna?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  CambiarContrasenaUsuario?: Maybe<User>;
  CrearSuscripcion?: Maybe<Suscripcion>;
  CrearUsuario?: Maybe<User>;
  CreateBlog?: Maybe<Blog>;
  CreateCategoria?: Maybe<Categoria>;
  CreateCategoriaBlog?: Maybe<CategoriaBlog>;
  CreateCrucero?: Maybe<Crucero>;
  CreateHorarioTour?: Maybe<HorarioTour>;
  CreateImage?: Maybe<Imagenes>;
  CreateLunaMiel?: Maybe<LunaMiel>;
  CreateTour?: Maybe<Tour>;
  DeleteBlog?: Maybe<Scalars['String']>;
  DeleteCategoria?: Maybe<Scalars['String']>;
  DeleteCategoriaBlog?: Maybe<Scalars['String']>;
  DeleteCrucero?: Maybe<Scalars['String']>;
  DeleteHorarioTour?: Maybe<Scalars['String']>;
  DeleteImage?: Maybe<Scalars['String']>;
  DeleteLunaMiel?: Maybe<Scalars['String']>;
  DeleteSuscripcion?: Maybe<Scalars['String']>;
  DeleteTour?: Maybe<Scalars['String']>;
  DeleteUsuario?: Maybe<Scalars['String']>;
  RecuperarContraUsuario?: Maybe<Scalars['String']>;
  UpdateBlog?: Maybe<Blog>;
  UpdateCategoria?: Maybe<Categoria>;
  UpdateCategoriaBlog?: Maybe<CategoriaBlog>;
  UpdateCrucero?: Maybe<Crucero>;
  UpdateHorarioTour?: Maybe<HorarioTour>;
  UpdateImage?: Maybe<Imagenes>;
  UpdateLunaMiel?: Maybe<LunaMiel>;
  UpdateTour?: Maybe<Tour>;
  UpdateUsuario?: Maybe<User>;
  login?: Maybe<User>;
};


export type MutationCambiarContrasenaUsuarioArgs = {
  input: CambiarContrasenaInput;
};


export type MutationCrearSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationCrearUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationCreateCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationCreateCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationCreateCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationCreateHorarioTourArgs = {
  input?: Maybe<HorarioTourInput>;
};


export type MutationCreateImageArgs = {
  imagen: Scalars['Upload'];
  input?: Maybe<ImagenesInput>;
};


export type MutationCreateLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationCreateTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationDeleteBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationDeleteCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationDeleteCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationDeleteCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationDeleteHorarioTourArgs = {
  input?: Maybe<HorarioTourInput>;
};


export type MutationDeleteImageArgs = {
  input: ImagenesInput;
};


export type MutationDeleteLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationDeleteSuscripcionArgs = {
  input: SuscripcionInput;
};


export type MutationDeleteTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationDeleteUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationRecuperarContraUsuarioArgs = {
  input: UserInput;
};


export type MutationUpdateBlogArgs = {
  input?: Maybe<BlogInput>;
};


export type MutationUpdateCategoriaArgs = {
  input?: Maybe<CategoriaInput>;
};


export type MutationUpdateCategoriaBlogArgs = {
  input?: Maybe<CategoriaBlogInput>;
};


export type MutationUpdateCruceroArgs = {
  input?: Maybe<CruceroInput>;
};


export type MutationUpdateHorarioTourArgs = {
  input?: Maybe<HorarioTourInput>;
};


export type MutationUpdateImageArgs = {
  input?: Maybe<ImagenesInput>;
};


export type MutationUpdateLunaMielArgs = {
  input?: Maybe<LunaMielInput>;
};


export type MutationUpdateTourArgs = {
  input?: Maybe<TourInput>;
};


export type MutationUpdateUsuarioArgs = {
  input?: Maybe<UserInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  GetAllBlog?: Maybe<GetAllBlog>;
  GetAllBlogCategoria?: Maybe<GetAllBlog>;
  GetAllCategoriaBlog?: Maybe<Array<Maybe<CategoriaBlog>>>;
  GetAllCrucero?: Maybe<GetAllCrucero>;
  GetAllLunaMiel?: Maybe<GetAllLunaMiel>;
  GetAllSuscripciones?: Maybe<GetAllSuscripciones>;
  GetAllTour?: Maybe<GetAllTour>;
  GetAllUsers?: Maybe<GetAllUsers>;
  GetCategoria?: Maybe<Array<Maybe<Categoria>>>;
  GetCategoriaCrucero?: Maybe<GetAllCrucero>;
  GetCategoriaLunaMiel?: Maybe<GetAllLunaMiel>;
  GetCategoriaTour?: Maybe<GetAllTour>;
  GetHorariosTour?: Maybe<Array<Maybe<HorarioTour>>>;
  GetImagenes?: Maybe<Array<Imagenes>>;
  GetSlugCategoria?: Maybe<Categoria>;
  GetSlugCategoriaBlog?: Maybe<CategoriaBlog>;
  GetSlugCrucero?: Maybe<Crucero>;
  GetSlugLunaMiel?: Maybe<LunaMiel>;
  GetSlugTour?: Maybe<Tour>;
};


export type QueryGetAllBlogArgs = {
  estadoBlog?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllBlogCategoriaArgs = {
  estadoBlog?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetAllCategoriaBlogArgs = {
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetAllCruceroArgs = {
  estadoCrucero?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllLunaMielArgs = {
  estadoLuna?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllSuscripcionesArgs = {
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllTourArgs = {
  estadoTour?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  estado?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  tipoUsuario?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaArgs = {
  estadoCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaCruceroArgs = {
  estadoCrucero?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaLunaMielArgs = {
  estadoLuna?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetCategoriaTourArgs = {
  estadoTour?: Maybe<Scalars['String']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['Int']>;
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetHorariosTourArgs = {
  anio?: Maybe<Scalars['String']>;
  mes?: Maybe<Scalars['String']>;
  tourId?: Maybe<Scalars['Int']>;
};


export type QueryGetSlugCategoriaArgs = {
  slugCategoria?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCategoriaBlogArgs = {
  slugCategoriaBlog?: Maybe<Scalars['String']>;
};


export type QueryGetSlugCruceroArgs = {
  slugCrucero?: Maybe<Scalars['String']>;
};


export type QueryGetSlugLunaMielArgs = {
  slugLuna?: Maybe<Scalars['String']>;
};


export type QueryGetSlugTourArgs = {
  slugTour?: Maybe<Scalars['String']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Tour = {
  __typename?: 'Tour';
  Categoria?: Maybe<Categoria>;
  actividadesTour?: Maybe<Scalars['String']>;
  categoriaId?: Maybe<Scalars['String']>;
  ciudadTour?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  descripcionCortaTour?: Maybe<Scalars['String']>;
  descripcionLargaTour?: Maybe<Scalars['String']>;
  destacadoTour?: Maybe<Scalars['String']>;
  estadoTour?: Maybe<Scalars['String']>;
  galeriaTour?: Maybe<Array<Maybe<Imagenes>>>;
  imagenPrincipalTour?: Maybe<Imagenes>;
  imagenSecundariaTour?: Maybe<Imagenes>;
  incluyeTour?: Maybe<Scalars['String']>;
  itinerarioTour?: Maybe<Scalars['String']>;
  keywordsTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  puntoPartidaTour?: Maybe<Scalars['String']>;
  regionTour?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugTour?: Maybe<Scalars['String']>;
  tituloTour?: Maybe<Scalars['String']>;
  tourId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  videoPresentacionTour?: Maybe<Scalars['String']>;
};

export type TourInput = {
  actividadesTour?: Maybe<Scalars['String']>;
  ciudadTour?: Maybe<Scalars['String']>;
  descripcionCortaTour?: Maybe<Scalars['String']>;
  descripcionLargaTour?: Maybe<Scalars['String']>;
  destacadoTour?: Maybe<Scalars['String']>;
  estadoTour?: Maybe<Scalars['String']>;
  galeriaTour?: Maybe<Array<Maybe<Scalars['Int']>>>;
  imagenPrincipalTour?: Maybe<Scalars['Int']>;
  imagenSecundariaTour?: Maybe<Scalars['Int']>;
  incluyeTour?: Maybe<Scalars['String']>;
  itinerarioTour?: Maybe<Scalars['String']>;
  keywordsTour?: Maybe<Scalars['String']>;
  noIncluyeTour?: Maybe<Scalars['String']>;
  notasTour?: Maybe<Scalars['String']>;
  politicasTour?: Maybe<Scalars['String']>;
  puntoPartidaTour?: Maybe<Scalars['String']>;
  regionTour?: Maybe<Scalars['String']>;
  slugCategoria?: Maybe<Scalars['String']>;
  slugTour?: Maybe<Scalars['String']>;
  tituloTour?: Maybe<Scalars['String']>;
  tourId?: Maybe<Scalars['Int']>;
  videoPresentacionTour?: Maybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
  userId?: Maybe<Scalars['ID']>;
};

export type UserInput = {
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombre?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['ID']>;
};

export type LoginInput = {
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type Suscripcion = {
  __typename?: 'suscripcion';
  created_at?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  suscripcionId?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['DateTime']>;
};

export type SuscripcionInput = {
  email?: Maybe<Scalars['String']>;
  suscripcionId?: Maybe<Scalars['Int']>;
};

export type CreateCategoriaMutationVariables = Exact<{
  input?: Maybe<CategoriaInput>;
}>;


export type CreateCategoriaMutation = { __typename?: 'Mutation', CreateCategoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined };

export type CreateCruceroMutationVariables = Exact<{
  input?: Maybe<CruceroInput>;
}>;


export type CreateCruceroMutation = { __typename?: 'Mutation', CreateCrucero?: { __typename?: 'Crucero', cruceroId?: number | null | undefined, tituloCrucero?: string | null | undefined, slugCrucero?: string | null | undefined, estadoCrucero?: string | null | undefined, destacadoCrucero?: string | null | undefined, keywordsCrucero?: string | null | undefined, regionCrucero?: string | null | undefined, ciudadCrucero?: string | null | undefined, descripcionCortaCrucero?: string | null | undefined, descripcionLargaCrucero?: string | null | undefined, itinerarioCrucero?: string | null | undefined, puntoPartidaCrucero?: string | null | undefined, incluyeCrucero?: string | null | undefined, noIncluyeCrucero?: string | null | undefined, actividadesCrucero?: string | null | undefined, notasCrucero?: string | null | undefined, politicasCrucero?: string | null | undefined, videoPresentacionCrucero?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaCrucero?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type CreateHorarioTourMutationVariables = Exact<{
  input?: Maybe<HorarioTourInput>;
}>;


export type CreateHorarioTourMutation = { __typename?: 'Mutation', CreateHorarioTour?: { __typename?: 'HorarioTour', horarioTourId?: number | null | undefined, hora?: string | null | undefined, cupos?: number | null | undefined, precio?: number | null | undefined, estado?: string | null | undefined, tourId?: number | null | undefined } | null | undefined };

export type CreateImageMutationVariables = Exact<{
  input?: Maybe<ImagenesInput>;
  imagen: Scalars['Upload'];
}>;


export type CreateImageMutation = { __typename?: 'Mutation', CreateImage?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined };

export type CreateLunaMielMutationVariables = Exact<{
  input?: Maybe<LunaMielInput>;
}>;


export type CreateLunaMielMutation = { __typename?: 'Mutation', CreateLunaMiel?: { __typename?: 'LunaMiel', lunaMielId?: number | null | undefined, tituloLuna?: string | null | undefined, slugLuna?: string | null | undefined, estadoLuna?: string | null | undefined, destacadoLuna?: string | null | undefined, keywordsLuna?: string | null | undefined, regionLuna?: string | null | undefined, ciudadLuna?: string | null | undefined, descripcionCortaLuna?: string | null | undefined, descripcionLargaLuna?: string | null | undefined, itinerarioLuna?: string | null | undefined, puntoPartidaLuna?: string | null | undefined, incluyeLuna?: string | null | undefined, noIncluyeLuna?: string | null | undefined, actividadesLuna?: string | null | undefined, notasLuna?: string | null | undefined, politicasLuna?: string | null | undefined, videoPresentacionLuna?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaLuna?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type CreateTourMutationVariables = Exact<{
  input?: Maybe<TourInput>;
}>;


export type CreateTourMutation = { __typename?: 'Mutation', CreateTour?: { __typename?: 'Tour', tourId?: number | null | undefined, tituloTour?: string | null | undefined, slugTour?: string | null | undefined, regionTour?: string | null | undefined, ciudadTour?: string | null | undefined, estadoTour?: string | null | undefined, destacadoTour?: string | null | undefined, keywordsTour?: string | null | undefined, descripcionCortaTour?: string | null | undefined, descripcionLargaTour?: string | null | undefined, itinerarioTour?: string | null | undefined, puntoPartidaTour?: string | null | undefined, incluyeTour?: string | null | undefined, noIncluyeTour?: string | null | undefined, actividadesTour?: string | null | undefined, notasTour?: string | null | undefined, politicasTour?: string | null | undefined, videoPresentacionTour?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaTour?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type DeleteBlogMutationVariables = Exact<{
  input?: Maybe<BlogInput>;
}>;


export type DeleteBlogMutation = { __typename?: 'Mutation', DeleteBlog?: string | null | undefined };

export type DeleteCategoriaMutationVariables = Exact<{
  input?: Maybe<CategoriaInput>;
}>;


export type DeleteCategoriaMutation = { __typename?: 'Mutation', DeleteCategoria?: string | null | undefined };

export type DeleteCategoriaBlogMutationVariables = Exact<{
  input?: Maybe<CategoriaBlogInput>;
}>;


export type DeleteCategoriaBlogMutation = { __typename?: 'Mutation', DeleteCategoriaBlog?: string | null | undefined };

export type DeleteCruceroMutationVariables = Exact<{
  input?: Maybe<CruceroInput>;
}>;


export type DeleteCruceroMutation = { __typename?: 'Mutation', DeleteCrucero?: string | null | undefined };

export type DeleteHorarioTourMutationVariables = Exact<{
  input?: Maybe<HorarioTourInput>;
}>;


export type DeleteHorarioTourMutation = { __typename?: 'Mutation', DeleteHorarioTour?: string | null | undefined };

export type DeleteImageMutationVariables = Exact<{
  input: ImagenesInput;
}>;


export type DeleteImageMutation = { __typename?: 'Mutation', DeleteImage?: string | null | undefined };

export type DeleteLunaMielMutationVariables = Exact<{
  input?: Maybe<LunaMielInput>;
}>;


export type DeleteLunaMielMutation = { __typename?: 'Mutation', DeleteLunaMiel?: string | null | undefined };

export type DeleteTourMutationVariables = Exact<{
  input?: Maybe<TourInput>;
}>;


export type DeleteTourMutation = { __typename?: 'Mutation', DeleteTour?: string | null | undefined };

export type UpdateCategoriaMutationVariables = Exact<{
  input?: Maybe<CategoriaInput>;
}>;


export type UpdateCategoriaMutation = { __typename?: 'Mutation', UpdateCategoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined };

export type UpdateCruceroMutationVariables = Exact<{
  input?: Maybe<CruceroInput>;
}>;


export type UpdateCruceroMutation = { __typename?: 'Mutation', UpdateCrucero?: { __typename?: 'Crucero', cruceroId?: number | null | undefined, tituloCrucero?: string | null | undefined, slugCrucero?: string | null | undefined, estadoCrucero?: string | null | undefined, destacadoCrucero?: string | null | undefined, keywordsCrucero?: string | null | undefined, regionCrucero?: string | null | undefined, ciudadCrucero?: string | null | undefined, descripcionCortaCrucero?: string | null | undefined, descripcionLargaCrucero?: string | null | undefined, itinerarioCrucero?: string | null | undefined, puntoPartidaCrucero?: string | null | undefined, incluyeCrucero?: string | null | undefined, noIncluyeCrucero?: string | null | undefined, actividadesCrucero?: string | null | undefined, notasCrucero?: string | null | undefined, politicasCrucero?: string | null | undefined, videoPresentacionCrucero?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaCrucero?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type UpdateHorarioTourMutationVariables = Exact<{
  input?: Maybe<HorarioTourInput>;
}>;


export type UpdateHorarioTourMutation = { __typename?: 'Mutation', UpdateHorarioTour?: { __typename?: 'HorarioTour', horarioTourId?: number | null | undefined, hora?: string | null | undefined, cupos?: number | null | undefined, precio?: number | null | undefined, fecha?: string | null | undefined, tourId?: number | null | undefined, estado?: string | null | undefined } | null | undefined };

export type UpdateImageMutationVariables = Exact<{
  input?: Maybe<ImagenesInput>;
}>;


export type UpdateImageMutation = { __typename?: 'Mutation', UpdateImage?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined };

export type UpdateLunaMielMutationVariables = Exact<{
  input?: Maybe<LunaMielInput>;
}>;


export type UpdateLunaMielMutation = { __typename?: 'Mutation', UpdateLunaMiel?: { __typename?: 'LunaMiel', lunaMielId?: number | null | undefined, tituloLuna?: string | null | undefined, slugLuna?: string | null | undefined, estadoLuna?: string | null | undefined, destacadoLuna?: string | null | undefined, keywordsLuna?: string | null | undefined, regionLuna?: string | null | undefined, ciudadLuna?: string | null | undefined, descripcionCortaLuna?: string | null | undefined, descripcionLargaLuna?: string | null | undefined, itinerarioLuna?: string | null | undefined, puntoPartidaLuna?: string | null | undefined, incluyeLuna?: string | null | undefined, noIncluyeLuna?: string | null | undefined, actividadesLuna?: string | null | undefined, notasLuna?: string | null | undefined, politicasLuna?: string | null | undefined, videoPresentacionLuna?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaLuna?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type UpdateTourMutationVariables = Exact<{
  input?: Maybe<TourInput>;
}>;


export type UpdateTourMutation = { __typename?: 'Mutation', UpdateTour?: { __typename?: 'Tour', tourId?: number | null | undefined, tituloTour?: string | null | undefined, slugTour?: string | null | undefined, regionTour?: string | null | undefined, ciudadTour?: string | null | undefined, estadoTour?: string | null | undefined, destacadoTour?: string | null | undefined, keywordsTour?: string | null | undefined, descripcionCortaTour?: string | null | undefined, descripcionLargaTour?: string | null | undefined, itinerarioTour?: string | null | undefined, puntoPartidaTour?: string | null | undefined, incluyeTour?: string | null | undefined, noIncluyeTour?: string | null | undefined, actividadesTour?: string | null | undefined, notasTour?: string | null | undefined, politicasTour?: string | null | undefined, videoPresentacionTour?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaTour?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };

export type GetAllBlogQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  estadoBlog?: Maybe<Scalars['String']>;
}>;


export type GetAllBlogQuery = { __typename?: 'Query', GetAllBlog?: { __typename?: 'GetAllBlog', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'Blog', blogId?: number | null | undefined, tituloBlog?: string | null | undefined, estadoBlog?: string | null | undefined, destacadoBlog?: string | null | undefined, keywordsBlog?: string | null | undefined, descripcionCortaBlog?: string | null | undefined, descripcionLargaBlog?: string | null | undefined, slugCategoriaBlog?: string | null | undefined, categoriaBlogId?: string | null | undefined, imagenPrincipalBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaBlog?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, CategoriaBlog?: { __typename?: 'CategoriaBlog', categoriaBlogId?: number | null | undefined, slugCategoriaBlog?: string | null | undefined, tituloCategoriaBlog?: string | null | undefined, estadoCategoriaBlog?: string | null | undefined, descripcionCategoriaBlog?: string | null | undefined, keywordsCategoriaBlog?: string | null | undefined, imagenPrincipalCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetCategoriaQueryVariables = Exact<{
  estadoCategoria?: Maybe<Scalars['String']>;
}>;


export type GetCategoriaQuery = { __typename?: 'Query', GetCategoria?: Array<{ __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type GetAllCategoriaBlogQueryVariables = Exact<{
  estadoCategoriaBlog?: Maybe<Scalars['String']>;
}>;


export type GetAllCategoriaBlogQuery = { __typename?: 'Query', GetAllCategoriaBlog?: Array<{ __typename?: 'CategoriaBlog', categoriaBlogId?: number | null | undefined, slugCategoriaBlog?: string | null | undefined, tituloCategoriaBlog?: string | null | undefined, estadoCategoriaBlog?: string | null | undefined, descripcionCategoriaBlog?: string | null | undefined, keywordsCategoriaBlog?: string | null | undefined, imagenPrincipalCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoriaBlog?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type GetAllCruceroQueryVariables = Exact<{
  estadoCrucero?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
}>;


export type GetAllCruceroQuery = { __typename?: 'Query', GetAllCrucero?: { __typename?: 'GetAllCrucero', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'Crucero', cruceroId?: number | null | undefined, tituloCrucero?: string | null | undefined, slugCrucero?: string | null | undefined, estadoCrucero?: string | null | undefined, destacadoCrucero?: string | null | undefined, keywordsCrucero?: string | null | undefined, regionCrucero?: string | null | undefined, ciudadCrucero?: string | null | undefined, descripcionCortaCrucero?: string | null | undefined, descripcionLargaCrucero?: string | null | undefined, itinerarioCrucero?: string | null | undefined, puntoPartidaCrucero?: string | null | undefined, incluyeCrucero?: string | null | undefined, noIncluyeCrucero?: string | null | undefined, actividadesCrucero?: string | null | undefined, notasCrucero?: string | null | undefined, politicasCrucero?: string | null | undefined, videoPresentacionCrucero?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCrucero?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaCrucero?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetAllLunaMielQueryVariables = Exact<{
  estadoLuna?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
}>;


export type GetAllLunaMielQuery = { __typename?: 'Query', GetAllLunaMiel?: { __typename?: 'GetAllLunaMiel', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'LunaMiel', lunaMielId?: number | null | undefined, tituloLuna?: string | null | undefined, slugLuna?: string | null | undefined, estadoLuna?: string | null | undefined, destacadoLuna?: string | null | undefined, keywordsLuna?: string | null | undefined, regionLuna?: string | null | undefined, ciudadLuna?: string | null | undefined, descripcionCortaLuna?: string | null | undefined, descripcionLargaLuna?: string | null | undefined, itinerarioLuna?: string | null | undefined, puntoPartidaLuna?: string | null | undefined, incluyeLuna?: string | null | undefined, noIncluyeLuna?: string | null | undefined, actividadesLuna?: string | null | undefined, notasLuna?: string | null | undefined, politicasLuna?: string | null | undefined, videoPresentacionLuna?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaLuna?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaLuna?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetAllTourQueryVariables = Exact<{
  estadoTour?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
}>;


export type GetAllTourQuery = { __typename?: 'Query', GetAllTour?: { __typename?: 'GetAllTour', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'Tour', tourId?: number | null | undefined, tituloTour?: string | null | undefined, slugTour?: string | null | undefined, regionTour?: string | null | undefined, ciudadTour?: string | null | undefined, estadoTour?: string | null | undefined, destacadoTour?: string | null | undefined, keywordsTour?: string | null | undefined, descripcionCortaTour?: string | null | undefined, descripcionLargaTour?: string | null | undefined, itinerarioTour?: string | null | undefined, puntoPartidaTour?: string | null | undefined, incluyeTour?: string | null | undefined, noIncluyeTour?: string | null | undefined, actividadesTour?: string | null | undefined, notasTour?: string | null | undefined, politicasTour?: string | null | undefined, videoPresentacionTour?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaTour?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined }> | null | undefined } | null | undefined };

export type GetAllUsersQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  numberPaginate?: Maybe<Scalars['Int']>;
  tipoUsuario?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
}>;


export type GetAllUsersQuery = { __typename?: 'Query', GetAllUsers?: { __typename?: 'GetAllUsers', nroTotalItems?: number | null | undefined, data?: Array<{ __typename?: 'User', userId?: string | null | undefined, nombre?: string | null | undefined, apellidos?: string | null | undefined, email?: string | null | undefined, estado?: string | null | undefined, apiToken?: string | null | undefined }> | null | undefined } | null | undefined };

export type GetHorariosTourQueryVariables = Exact<{
  anio?: Maybe<Scalars['String']>;
  mes?: Maybe<Scalars['String']>;
  tourId?: Maybe<Scalars['Int']>;
}>;


export type GetHorariosTourQuery = { __typename?: 'Query', GetHorariosTour?: Array<{ __typename?: 'HorarioTour', horarioTourId?: number | null | undefined, hora?: string | null | undefined, fecha?: string | null | undefined, cupos?: number | null | undefined, precio?: number | null | undefined, estado?: string | null | undefined, tourId?: number | null | undefined } | null | undefined> | null | undefined };

export type GetImagenesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetImagenesQuery = { __typename?: 'Query', GetImagenes?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined }> | null | undefined };

export type GetSlugTourQueryVariables = Exact<{
  slugTour?: Maybe<Scalars['String']>;
}>;


export type GetSlugTourQuery = { __typename?: 'Query', GetSlugTour?: { __typename?: 'Tour', tourId?: number | null | undefined, tituloTour?: string | null | undefined, slugTour?: string | null | undefined, regionTour?: string | null | undefined, ciudadTour?: string | null | undefined, estadoTour?: string | null | undefined, destacadoTour?: string | null | undefined, keywordsTour?: string | null | undefined, descripcionCortaTour?: string | null | undefined, descripcionLargaTour?: string | null | undefined, itinerarioTour?: string | null | undefined, puntoPartidaTour?: string | null | undefined, incluyeTour?: string | null | undefined, noIncluyeTour?: string | null | undefined, actividadesTour?: string | null | undefined, notasTour?: string | null | undefined, politicasTour?: string | null | undefined, videoPresentacionTour?: string | null | undefined, slugCategoria?: string | null | undefined, categoriaId?: string | null | undefined, imagenPrincipalTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaTour?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, galeriaTour?: Array<{ __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined> | null | undefined, Categoria?: { __typename?: 'Categoria', categoriaId?: number | null | undefined, slugCategoria?: string | null | undefined, tituloCategoria?: string | null | undefined, descripcion?: string | null | undefined, estadoCategoria?: string | null | undefined, keywordsCategoria?: string | null | undefined, imagenPrincipalCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined, imagenSecundariaCategoria?: { __typename?: 'Imagenes', id?: string | null | undefined, descripcion?: string | null | undefined, url?: string | null | undefined } | null | undefined } | null | undefined } | null | undefined };


export const CreateCategoriaDocument = gql`
    mutation CreateCategoria($input: CategoriaInput) {
  CreateCategoria(input: $input) {
    categoriaId
    slugCategoria
    tituloCategoria
    descripcion
    estadoCategoria
    keywordsCategoria
    imagenPrincipalCategoria {
      id
      descripcion
      url
    }
    imagenSecundariaCategoria {
      id
      descripcion
      url
    }
  }
}
    `;
export type CreateCategoriaMutationFn = Apollo.MutationFunction<CreateCategoriaMutation, CreateCategoriaMutationVariables>;

/**
 * __useCreateCategoriaMutation__
 *
 * To run a mutation, you first call `useCreateCategoriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoriaMutation, { data, loading, error }] = useCreateCategoriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCategoriaMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoriaMutation, CreateCategoriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoriaMutation, CreateCategoriaMutationVariables>(CreateCategoriaDocument, options);
      }
export type CreateCategoriaMutationHookResult = ReturnType<typeof useCreateCategoriaMutation>;
export type CreateCategoriaMutationResult = Apollo.MutationResult<CreateCategoriaMutation>;
export type CreateCategoriaMutationOptions = Apollo.BaseMutationOptions<CreateCategoriaMutation, CreateCategoriaMutationVariables>;
export const CreateCruceroDocument = gql`
    mutation CreateCrucero($input: CruceroInput) {
  CreateCrucero(input: $input) {
    cruceroId
    tituloCrucero
    slugCrucero
    estadoCrucero
    destacadoCrucero
    keywordsCrucero
    regionCrucero
    ciudadCrucero
    descripcionCortaCrucero
    descripcionLargaCrucero
    itinerarioCrucero
    puntoPartidaCrucero
    incluyeCrucero
    noIncluyeCrucero
    actividadesCrucero
    notasCrucero
    politicasCrucero
    videoPresentacionCrucero
    imagenPrincipalCrucero {
      id
      descripcion
      url
    }
    imagenSecundariaCrucero {
      id
      descripcion
      url
    }
    galeriaCrucero {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type CreateCruceroMutationFn = Apollo.MutationFunction<CreateCruceroMutation, CreateCruceroMutationVariables>;

/**
 * __useCreateCruceroMutation__
 *
 * To run a mutation, you first call `useCreateCruceroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCruceroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCruceroMutation, { data, loading, error }] = useCreateCruceroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateCruceroMutation(baseOptions?: Apollo.MutationHookOptions<CreateCruceroMutation, CreateCruceroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCruceroMutation, CreateCruceroMutationVariables>(CreateCruceroDocument, options);
      }
export type CreateCruceroMutationHookResult = ReturnType<typeof useCreateCruceroMutation>;
export type CreateCruceroMutationResult = Apollo.MutationResult<CreateCruceroMutation>;
export type CreateCruceroMutationOptions = Apollo.BaseMutationOptions<CreateCruceroMutation, CreateCruceroMutationVariables>;
export const CreateHorarioTourDocument = gql`
    mutation CreateHorarioTour($input: HorarioTourInput) {
  CreateHorarioTour(input: $input) {
    horarioTourId
    hora
    cupos
    precio
    estado
    tourId
  }
}
    `;
export type CreateHorarioTourMutationFn = Apollo.MutationFunction<CreateHorarioTourMutation, CreateHorarioTourMutationVariables>;

/**
 * __useCreateHorarioTourMutation__
 *
 * To run a mutation, you first call `useCreateHorarioTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHorarioTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHorarioTourMutation, { data, loading, error }] = useCreateHorarioTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHorarioTourMutation(baseOptions?: Apollo.MutationHookOptions<CreateHorarioTourMutation, CreateHorarioTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHorarioTourMutation, CreateHorarioTourMutationVariables>(CreateHorarioTourDocument, options);
      }
export type CreateHorarioTourMutationHookResult = ReturnType<typeof useCreateHorarioTourMutation>;
export type CreateHorarioTourMutationResult = Apollo.MutationResult<CreateHorarioTourMutation>;
export type CreateHorarioTourMutationOptions = Apollo.BaseMutationOptions<CreateHorarioTourMutation, CreateHorarioTourMutationVariables>;
export const CreateImageDocument = gql`
    mutation CreateImage($input: ImagenesInput, $imagen: Upload!) {
  CreateImage(input: $input, imagen: $imagen) {
    id
    descripcion
    url
  }
}
    `;
export type CreateImageMutationFn = Apollo.MutationFunction<CreateImageMutation, CreateImageMutationVariables>;

/**
 * __useCreateImageMutation__
 *
 * To run a mutation, you first call `useCreateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImageMutation, { data, loading, error }] = useCreateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImageMutation(baseOptions?: Apollo.MutationHookOptions<CreateImageMutation, CreateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImageMutation, CreateImageMutationVariables>(CreateImageDocument, options);
      }
export type CreateImageMutationHookResult = ReturnType<typeof useCreateImageMutation>;
export type CreateImageMutationResult = Apollo.MutationResult<CreateImageMutation>;
export type CreateImageMutationOptions = Apollo.BaseMutationOptions<CreateImageMutation, CreateImageMutationVariables>;
export const CreateLunaMielDocument = gql`
    mutation CreateLunaMiel($input: LunaMielInput) {
  CreateLunaMiel(input: $input) {
    lunaMielId
    tituloLuna
    slugLuna
    estadoLuna
    destacadoLuna
    keywordsLuna
    regionLuna
    ciudadLuna
    descripcionCortaLuna
    descripcionLargaLuna
    itinerarioLuna
    puntoPartidaLuna
    incluyeLuna
    noIncluyeLuna
    actividadesLuna
    notasLuna
    politicasLuna
    videoPresentacionLuna
    imagenPrincipalLuna {
      id
      descripcion
      url
    }
    imagenSecundariaLuna {
      id
      descripcion
      url
    }
    galeriaLuna {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type CreateLunaMielMutationFn = Apollo.MutationFunction<CreateLunaMielMutation, CreateLunaMielMutationVariables>;

/**
 * __useCreateLunaMielMutation__
 *
 * To run a mutation, you first call `useCreateLunaMielMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLunaMielMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLunaMielMutation, { data, loading, error }] = useCreateLunaMielMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLunaMielMutation(baseOptions?: Apollo.MutationHookOptions<CreateLunaMielMutation, CreateLunaMielMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLunaMielMutation, CreateLunaMielMutationVariables>(CreateLunaMielDocument, options);
      }
export type CreateLunaMielMutationHookResult = ReturnType<typeof useCreateLunaMielMutation>;
export type CreateLunaMielMutationResult = Apollo.MutationResult<CreateLunaMielMutation>;
export type CreateLunaMielMutationOptions = Apollo.BaseMutationOptions<CreateLunaMielMutation, CreateLunaMielMutationVariables>;
export const CreateTourDocument = gql`
    mutation CreateTour($input: TourInput) {
  CreateTour(input: $input) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    incluyeTour
    noIncluyeTour
    actividadesTour
    notasTour
    politicasTour
    videoPresentacionTour
    imagenPrincipalTour {
      id
      descripcion
      url
    }
    imagenSecundariaTour {
      id
      descripcion
      url
    }
    galeriaTour {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type CreateTourMutationFn = Apollo.MutationFunction<CreateTourMutation, CreateTourMutationVariables>;

/**
 * __useCreateTourMutation__
 *
 * To run a mutation, you first call `useCreateTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTourMutation, { data, loading, error }] = useCreateTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTourMutation(baseOptions?: Apollo.MutationHookOptions<CreateTourMutation, CreateTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTourMutation, CreateTourMutationVariables>(CreateTourDocument, options);
      }
export type CreateTourMutationHookResult = ReturnType<typeof useCreateTourMutation>;
export type CreateTourMutationResult = Apollo.MutationResult<CreateTourMutation>;
export type CreateTourMutationOptions = Apollo.BaseMutationOptions<CreateTourMutation, CreateTourMutationVariables>;
export const DeleteBlogDocument = gql`
    mutation DeleteBlog($input: BlogInput) {
  DeleteBlog(input: $input)
}
    `;
export type DeleteBlogMutationFn = Apollo.MutationFunction<DeleteBlogMutation, DeleteBlogMutationVariables>;

/**
 * __useDeleteBlogMutation__
 *
 * To run a mutation, you first call `useDeleteBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBlogMutation, { data, loading, error }] = useDeleteBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBlogMutation, DeleteBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBlogMutation, DeleteBlogMutationVariables>(DeleteBlogDocument, options);
      }
export type DeleteBlogMutationHookResult = ReturnType<typeof useDeleteBlogMutation>;
export type DeleteBlogMutationResult = Apollo.MutationResult<DeleteBlogMutation>;
export type DeleteBlogMutationOptions = Apollo.BaseMutationOptions<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const DeleteCategoriaDocument = gql`
    mutation DeleteCategoria($input: CategoriaInput) {
  DeleteCategoria(input: $input)
}
    `;
export type DeleteCategoriaMutationFn = Apollo.MutationFunction<DeleteCategoriaMutation, DeleteCategoriaMutationVariables>;

/**
 * __useDeleteCategoriaMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaMutation, { data, loading, error }] = useDeleteCategoriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCategoriaMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaMutation, DeleteCategoriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaMutation, DeleteCategoriaMutationVariables>(DeleteCategoriaDocument, options);
      }
export type DeleteCategoriaMutationHookResult = ReturnType<typeof useDeleteCategoriaMutation>;
export type DeleteCategoriaMutationResult = Apollo.MutationResult<DeleteCategoriaMutation>;
export type DeleteCategoriaMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaMutation, DeleteCategoriaMutationVariables>;
export const DeleteCategoriaBlogDocument = gql`
    mutation DeleteCategoriaBlog($input: CategoriaBlogInput) {
  DeleteCategoriaBlog(input: $input)
}
    `;
export type DeleteCategoriaBlogMutationFn = Apollo.MutationFunction<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;

/**
 * __useDeleteCategoriaBlogMutation__
 *
 * To run a mutation, you first call `useDeleteCategoriaBlogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoriaBlogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoriaBlogMutation, { data, loading, error }] = useDeleteCategoriaBlogMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCategoriaBlogMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>(DeleteCategoriaBlogDocument, options);
      }
export type DeleteCategoriaBlogMutationHookResult = ReturnType<typeof useDeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationResult = Apollo.MutationResult<DeleteCategoriaBlogMutation>;
export type DeleteCategoriaBlogMutationOptions = Apollo.BaseMutationOptions<DeleteCategoriaBlogMutation, DeleteCategoriaBlogMutationVariables>;
export const DeleteCruceroDocument = gql`
    mutation DeleteCrucero($input: CruceroInput) {
  DeleteCrucero(input: $input)
}
    `;
export type DeleteCruceroMutationFn = Apollo.MutationFunction<DeleteCruceroMutation, DeleteCruceroMutationVariables>;

/**
 * __useDeleteCruceroMutation__
 *
 * To run a mutation, you first call `useDeleteCruceroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCruceroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCruceroMutation, { data, loading, error }] = useDeleteCruceroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteCruceroMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCruceroMutation, DeleteCruceroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCruceroMutation, DeleteCruceroMutationVariables>(DeleteCruceroDocument, options);
      }
export type DeleteCruceroMutationHookResult = ReturnType<typeof useDeleteCruceroMutation>;
export type DeleteCruceroMutationResult = Apollo.MutationResult<DeleteCruceroMutation>;
export type DeleteCruceroMutationOptions = Apollo.BaseMutationOptions<DeleteCruceroMutation, DeleteCruceroMutationVariables>;
export const DeleteHorarioTourDocument = gql`
    mutation DeleteHorarioTour($input: HorarioTourInput) {
  DeleteHorarioTour(input: $input)
}
    `;
export type DeleteHorarioTourMutationFn = Apollo.MutationFunction<DeleteHorarioTourMutation, DeleteHorarioTourMutationVariables>;

/**
 * __useDeleteHorarioTourMutation__
 *
 * To run a mutation, you first call `useDeleteHorarioTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHorarioTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHorarioTourMutation, { data, loading, error }] = useDeleteHorarioTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteHorarioTourMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHorarioTourMutation, DeleteHorarioTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHorarioTourMutation, DeleteHorarioTourMutationVariables>(DeleteHorarioTourDocument, options);
      }
export type DeleteHorarioTourMutationHookResult = ReturnType<typeof useDeleteHorarioTourMutation>;
export type DeleteHorarioTourMutationResult = Apollo.MutationResult<DeleteHorarioTourMutation>;
export type DeleteHorarioTourMutationOptions = Apollo.BaseMutationOptions<DeleteHorarioTourMutation, DeleteHorarioTourMutationVariables>;
export const DeleteImageDocument = gql`
    mutation DeleteImage($input: ImagenesInput!) {
  DeleteImage(input: $input)
}
    `;
export type DeleteImageMutationFn = Apollo.MutationFunction<DeleteImageMutation, DeleteImageMutationVariables>;

/**
 * __useDeleteImageMutation__
 *
 * To run a mutation, you first call `useDeleteImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImageMutation, { data, loading, error }] = useDeleteImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteImageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImageMutation, DeleteImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImageMutation, DeleteImageMutationVariables>(DeleteImageDocument, options);
      }
export type DeleteImageMutationHookResult = ReturnType<typeof useDeleteImageMutation>;
export type DeleteImageMutationResult = Apollo.MutationResult<DeleteImageMutation>;
export type DeleteImageMutationOptions = Apollo.BaseMutationOptions<DeleteImageMutation, DeleteImageMutationVariables>;
export const DeleteLunaMielDocument = gql`
    mutation DeleteLunaMiel($input: LunaMielInput) {
  DeleteLunaMiel(input: $input)
}
    `;
export type DeleteLunaMielMutationFn = Apollo.MutationFunction<DeleteLunaMielMutation, DeleteLunaMielMutationVariables>;

/**
 * __useDeleteLunaMielMutation__
 *
 * To run a mutation, you first call `useDeleteLunaMielMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLunaMielMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLunaMielMutation, { data, loading, error }] = useDeleteLunaMielMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteLunaMielMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLunaMielMutation, DeleteLunaMielMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLunaMielMutation, DeleteLunaMielMutationVariables>(DeleteLunaMielDocument, options);
      }
export type DeleteLunaMielMutationHookResult = ReturnType<typeof useDeleteLunaMielMutation>;
export type DeleteLunaMielMutationResult = Apollo.MutationResult<DeleteLunaMielMutation>;
export type DeleteLunaMielMutationOptions = Apollo.BaseMutationOptions<DeleteLunaMielMutation, DeleteLunaMielMutationVariables>;
export const DeleteTourDocument = gql`
    mutation DeleteTour($input: TourInput) {
  DeleteTour(input: $input)
}
    `;
export type DeleteTourMutationFn = Apollo.MutationFunction<DeleteTourMutation, DeleteTourMutationVariables>;

/**
 * __useDeleteTourMutation__
 *
 * To run a mutation, you first call `useDeleteTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTourMutation, { data, loading, error }] = useDeleteTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteTourMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTourMutation, DeleteTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTourMutation, DeleteTourMutationVariables>(DeleteTourDocument, options);
      }
export type DeleteTourMutationHookResult = ReturnType<typeof useDeleteTourMutation>;
export type DeleteTourMutationResult = Apollo.MutationResult<DeleteTourMutation>;
export type DeleteTourMutationOptions = Apollo.BaseMutationOptions<DeleteTourMutation, DeleteTourMutationVariables>;
export const UpdateCategoriaDocument = gql`
    mutation UpdateCategoria($input: CategoriaInput) {
  UpdateCategoria(input: $input) {
    categoriaId
    slugCategoria
    tituloCategoria
    descripcion
    estadoCategoria
    keywordsCategoria
    imagenPrincipalCategoria {
      id
      descripcion
      url
    }
    imagenSecundariaCategoria {
      id
      descripcion
      url
    }
  }
}
    `;
export type UpdateCategoriaMutationFn = Apollo.MutationFunction<UpdateCategoriaMutation, UpdateCategoriaMutationVariables>;

/**
 * __useUpdateCategoriaMutation__
 *
 * To run a mutation, you first call `useUpdateCategoriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoriaMutation, { data, loading, error }] = useUpdateCategoriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCategoriaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoriaMutation, UpdateCategoriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoriaMutation, UpdateCategoriaMutationVariables>(UpdateCategoriaDocument, options);
      }
export type UpdateCategoriaMutationHookResult = ReturnType<typeof useUpdateCategoriaMutation>;
export type UpdateCategoriaMutationResult = Apollo.MutationResult<UpdateCategoriaMutation>;
export type UpdateCategoriaMutationOptions = Apollo.BaseMutationOptions<UpdateCategoriaMutation, UpdateCategoriaMutationVariables>;
export const UpdateCruceroDocument = gql`
    mutation UpdateCrucero($input: CruceroInput) {
  UpdateCrucero(input: $input) {
    cruceroId
    tituloCrucero
    slugCrucero
    estadoCrucero
    destacadoCrucero
    keywordsCrucero
    regionCrucero
    ciudadCrucero
    descripcionCortaCrucero
    descripcionLargaCrucero
    itinerarioCrucero
    puntoPartidaCrucero
    incluyeCrucero
    noIncluyeCrucero
    actividadesCrucero
    notasCrucero
    politicasCrucero
    videoPresentacionCrucero
    imagenPrincipalCrucero {
      id
      descripcion
      url
    }
    imagenSecundariaCrucero {
      id
      descripcion
      url
    }
    galeriaCrucero {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type UpdateCruceroMutationFn = Apollo.MutationFunction<UpdateCruceroMutation, UpdateCruceroMutationVariables>;

/**
 * __useUpdateCruceroMutation__
 *
 * To run a mutation, you first call `useUpdateCruceroMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCruceroMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCruceroMutation, { data, loading, error }] = useUpdateCruceroMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCruceroMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCruceroMutation, UpdateCruceroMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCruceroMutation, UpdateCruceroMutationVariables>(UpdateCruceroDocument, options);
      }
export type UpdateCruceroMutationHookResult = ReturnType<typeof useUpdateCruceroMutation>;
export type UpdateCruceroMutationResult = Apollo.MutationResult<UpdateCruceroMutation>;
export type UpdateCruceroMutationOptions = Apollo.BaseMutationOptions<UpdateCruceroMutation, UpdateCruceroMutationVariables>;
export const UpdateHorarioTourDocument = gql`
    mutation UpdateHorarioTour($input: HorarioTourInput) {
  UpdateHorarioTour(input: $input) {
    horarioTourId
    hora
    cupos
    precio
    fecha
    tourId
    estado
  }
}
    `;
export type UpdateHorarioTourMutationFn = Apollo.MutationFunction<UpdateHorarioTourMutation, UpdateHorarioTourMutationVariables>;

/**
 * __useUpdateHorarioTourMutation__
 *
 * To run a mutation, you first call `useUpdateHorarioTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHorarioTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHorarioTourMutation, { data, loading, error }] = useUpdateHorarioTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateHorarioTourMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHorarioTourMutation, UpdateHorarioTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHorarioTourMutation, UpdateHorarioTourMutationVariables>(UpdateHorarioTourDocument, options);
      }
export type UpdateHorarioTourMutationHookResult = ReturnType<typeof useUpdateHorarioTourMutation>;
export type UpdateHorarioTourMutationResult = Apollo.MutationResult<UpdateHorarioTourMutation>;
export type UpdateHorarioTourMutationOptions = Apollo.BaseMutationOptions<UpdateHorarioTourMutation, UpdateHorarioTourMutationVariables>;
export const UpdateImageDocument = gql`
    mutation UpdateImage($input: ImagenesInput) {
  UpdateImage(input: $input) {
    id
    descripcion
    url
  }
}
    `;
export type UpdateImageMutationFn = Apollo.MutationFunction<UpdateImageMutation, UpdateImageMutationVariables>;

/**
 * __useUpdateImageMutation__
 *
 * To run a mutation, you first call `useUpdateImageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateImageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateImageMutation, { data, loading, error }] = useUpdateImageMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateImageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateImageMutation, UpdateImageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateImageMutation, UpdateImageMutationVariables>(UpdateImageDocument, options);
      }
export type UpdateImageMutationHookResult = ReturnType<typeof useUpdateImageMutation>;
export type UpdateImageMutationResult = Apollo.MutationResult<UpdateImageMutation>;
export type UpdateImageMutationOptions = Apollo.BaseMutationOptions<UpdateImageMutation, UpdateImageMutationVariables>;
export const UpdateLunaMielDocument = gql`
    mutation UpdateLunaMiel($input: LunaMielInput) {
  UpdateLunaMiel(input: $input) {
    lunaMielId
    tituloLuna
    slugLuna
    estadoLuna
    destacadoLuna
    keywordsLuna
    regionLuna
    ciudadLuna
    descripcionCortaLuna
    descripcionLargaLuna
    itinerarioLuna
    puntoPartidaLuna
    incluyeLuna
    noIncluyeLuna
    actividadesLuna
    notasLuna
    politicasLuna
    videoPresentacionLuna
    imagenPrincipalLuna {
      id
      descripcion
      url
    }
    imagenSecundariaLuna {
      id
      descripcion
      url
    }
    galeriaLuna {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type UpdateLunaMielMutationFn = Apollo.MutationFunction<UpdateLunaMielMutation, UpdateLunaMielMutationVariables>;

/**
 * __useUpdateLunaMielMutation__
 *
 * To run a mutation, you first call `useUpdateLunaMielMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLunaMielMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLunaMielMutation, { data, loading, error }] = useUpdateLunaMielMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateLunaMielMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLunaMielMutation, UpdateLunaMielMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLunaMielMutation, UpdateLunaMielMutationVariables>(UpdateLunaMielDocument, options);
      }
export type UpdateLunaMielMutationHookResult = ReturnType<typeof useUpdateLunaMielMutation>;
export type UpdateLunaMielMutationResult = Apollo.MutationResult<UpdateLunaMielMutation>;
export type UpdateLunaMielMutationOptions = Apollo.BaseMutationOptions<UpdateLunaMielMutation, UpdateLunaMielMutationVariables>;
export const UpdateTourDocument = gql`
    mutation UpdateTour($input: TourInput) {
  UpdateTour(input: $input) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    incluyeTour
    noIncluyeTour
    actividadesTour
    notasTour
    politicasTour
    videoPresentacionTour
    imagenPrincipalTour {
      id
      descripcion
      url
    }
    imagenSecundariaTour {
      id
      descripcion
      url
    }
    galeriaTour {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;
export type UpdateTourMutationFn = Apollo.MutationFunction<UpdateTourMutation, UpdateTourMutationVariables>;

/**
 * __useUpdateTourMutation__
 *
 * To run a mutation, you first call `useUpdateTourMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTourMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTourMutation, { data, loading, error }] = useUpdateTourMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateTourMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTourMutation, UpdateTourMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTourMutation, UpdateTourMutationVariables>(UpdateTourDocument, options);
      }
export type UpdateTourMutationHookResult = ReturnType<typeof useUpdateTourMutation>;
export type UpdateTourMutationResult = Apollo.MutationResult<UpdateTourMutation>;
export type UpdateTourMutationOptions = Apollo.BaseMutationOptions<UpdateTourMutation, UpdateTourMutationVariables>;
export const GetAllBlogDocument = gql`
    query GetAllBlog($page: Int, $numberPaginate: Int, $estadoBlog: String) {
  GetAllBlog(
    page: $page
    numberPaginate: $numberPaginate
    estadoBlog: $estadoBlog
  ) {
    nroTotalItems
    data {
      blogId
      tituloBlog
      estadoBlog
      destacadoBlog
      keywordsBlog
      descripcionCortaBlog
      descripcionLargaBlog
      imagenPrincipalBlog {
        id
        descripcion
        url
      }
      imagenSecundariaBlog {
        id
        descripcion
        url
      }
      galeriaBlog {
        id
        descripcion
        url
      }
      slugCategoriaBlog
      categoriaBlogId
      CategoriaBlog {
        categoriaBlogId
        slugCategoriaBlog
        tituloCategoriaBlog
        estadoCategoriaBlog
        descripcionCategoriaBlog
        keywordsCategoriaBlog
        imagenPrincipalCategoriaBlog {
          id
          descripcion
          url
        }
        imagenSecundariaCategoriaBlog {
          id
          descripcion
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllBlogQuery__
 *
 * To run a query within a React component, call `useGetAllBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBlogQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *      estadoBlog: // value for 'estadoBlog'
 *   },
 * });
 */
export function useGetAllBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBlogQuery, GetAllBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBlogQuery, GetAllBlogQueryVariables>(GetAllBlogDocument, options);
      }
export function useGetAllBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBlogQuery, GetAllBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBlogQuery, GetAllBlogQueryVariables>(GetAllBlogDocument, options);
        }
export type GetAllBlogQueryHookResult = ReturnType<typeof useGetAllBlogQuery>;
export type GetAllBlogLazyQueryHookResult = ReturnType<typeof useGetAllBlogLazyQuery>;
export type GetAllBlogQueryResult = Apollo.QueryResult<GetAllBlogQuery, GetAllBlogQueryVariables>;
export const GetCategoriaDocument = gql`
    query GetCategoria($estadoCategoria: String) {
  GetCategoria(estadoCategoria: $estadoCategoria) {
    categoriaId
    slugCategoria
    tituloCategoria
    descripcion
    estadoCategoria
    keywordsCategoria
    imagenPrincipalCategoria {
      id
      descripcion
      url
    }
    imagenSecundariaCategoria {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetCategoriaQuery__
 *
 * To run a query within a React component, call `useGetCategoriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriaQuery({
 *   variables: {
 *      estadoCategoria: // value for 'estadoCategoria'
 *   },
 * });
 */
export function useGetCategoriaQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
      }
export function useGetCategoriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriaQuery, GetCategoriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriaQuery, GetCategoriaQueryVariables>(GetCategoriaDocument, options);
        }
export type GetCategoriaQueryHookResult = ReturnType<typeof useGetCategoriaQuery>;
export type GetCategoriaLazyQueryHookResult = ReturnType<typeof useGetCategoriaLazyQuery>;
export type GetCategoriaQueryResult = Apollo.QueryResult<GetCategoriaQuery, GetCategoriaQueryVariables>;
export const GetAllCategoriaBlogDocument = gql`
    query GetAllCategoriaBlog($estadoCategoriaBlog: String) {
  GetAllCategoriaBlog(estadoCategoriaBlog: $estadoCategoriaBlog) {
    categoriaBlogId
    slugCategoriaBlog
    tituloCategoriaBlog
    estadoCategoriaBlog
    descripcionCategoriaBlog
    keywordsCategoriaBlog
    imagenPrincipalCategoriaBlog {
      id
      descripcion
      url
    }
    imagenSecundariaCategoriaBlog {
      id
      descripcion
      url
    }
  }
}
    `;

/**
 * __useGetAllCategoriaBlogQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriaBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriaBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriaBlogQuery({
 *   variables: {
 *      estadoCategoriaBlog: // value for 'estadoCategoriaBlog'
 *   },
 * });
 */
export function useGetAllCategoriaBlogQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>(GetAllCategoriaBlogDocument, options);
      }
export function useGetAllCategoriaBlogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>(GetAllCategoriaBlogDocument, options);
        }
export type GetAllCategoriaBlogQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogQuery>;
export type GetAllCategoriaBlogLazyQueryHookResult = ReturnType<typeof useGetAllCategoriaBlogLazyQuery>;
export type GetAllCategoriaBlogQueryResult = Apollo.QueryResult<GetAllCategoriaBlogQuery, GetAllCategoriaBlogQueryVariables>;
export const GetAllCruceroDocument = gql`
    query GetAllCrucero($estadoCrucero: String, $page: Int, $numberPaginate: Int) {
  GetAllCrucero(
    estadoCrucero: $estadoCrucero
    page: $page
    numberPaginate: $numberPaginate
  ) {
    nroTotalItems
    data {
      cruceroId
      tituloCrucero
      slugCrucero
      estadoCrucero
      destacadoCrucero
      keywordsCrucero
      regionCrucero
      ciudadCrucero
      descripcionCortaCrucero
      descripcionLargaCrucero
      itinerarioCrucero
      puntoPartidaCrucero
      incluyeCrucero
      noIncluyeCrucero
      actividadesCrucero
      notasCrucero
      politicasCrucero
      videoPresentacionCrucero
      imagenPrincipalCrucero {
        id
        descripcion
        url
      }
      imagenSecundariaCrucero {
        id
        descripcion
        url
      }
      galeriaCrucero {
        id
        descripcion
        url
      }
      slugCategoria
      categoriaId
      Categoria {
        categoriaId
        slugCategoria
        tituloCategoria
        descripcion
        estadoCategoria
        keywordsCategoria
        imagenPrincipalCategoria {
          id
          descripcion
          url
        }
        imagenSecundariaCategoria {
          id
          descripcion
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllCruceroQuery__
 *
 * To run a query within a React component, call `useGetAllCruceroQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCruceroQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCruceroQuery({
 *   variables: {
 *      estadoCrucero: // value for 'estadoCrucero'
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllCruceroQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCruceroQuery, GetAllCruceroQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCruceroQuery, GetAllCruceroQueryVariables>(GetAllCruceroDocument, options);
      }
export function useGetAllCruceroLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCruceroQuery, GetAllCruceroQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCruceroQuery, GetAllCruceroQueryVariables>(GetAllCruceroDocument, options);
        }
export type GetAllCruceroQueryHookResult = ReturnType<typeof useGetAllCruceroQuery>;
export type GetAllCruceroLazyQueryHookResult = ReturnType<typeof useGetAllCruceroLazyQuery>;
export type GetAllCruceroQueryResult = Apollo.QueryResult<GetAllCruceroQuery, GetAllCruceroQueryVariables>;
export const GetAllLunaMielDocument = gql`
    query GetAllLunaMiel($estadoLuna: String, $page: Int, $numberPaginate: Int) {
  GetAllLunaMiel(
    estadoLuna: $estadoLuna
    page: $page
    numberPaginate: $numberPaginate
  ) {
    nroTotalItems
    data {
      lunaMielId
      tituloLuna
      slugLuna
      estadoLuna
      destacadoLuna
      keywordsLuna
      regionLuna
      ciudadLuna
      descripcionCortaLuna
      descripcionLargaLuna
      itinerarioLuna
      puntoPartidaLuna
      incluyeLuna
      noIncluyeLuna
      actividadesLuna
      notasLuna
      politicasLuna
      videoPresentacionLuna
      imagenPrincipalLuna {
        id
        descripcion
        url
      }
      imagenSecundariaLuna {
        id
        descripcion
        url
      }
      galeriaLuna {
        id
        descripcion
        url
      }
      slugCategoria
      categoriaId
      Categoria {
        categoriaId
        slugCategoria
        tituloCategoria
        descripcion
        estadoCategoria
        keywordsCategoria
        imagenPrincipalCategoria {
          id
          descripcion
          url
        }
        imagenSecundariaCategoria {
          id
          descripcion
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllLunaMielQuery__
 *
 * To run a query within a React component, call `useGetAllLunaMielQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLunaMielQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLunaMielQuery({
 *   variables: {
 *      estadoLuna: // value for 'estadoLuna'
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllLunaMielQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLunaMielQuery, GetAllLunaMielQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLunaMielQuery, GetAllLunaMielQueryVariables>(GetAllLunaMielDocument, options);
      }
export function useGetAllLunaMielLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLunaMielQuery, GetAllLunaMielQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLunaMielQuery, GetAllLunaMielQueryVariables>(GetAllLunaMielDocument, options);
        }
export type GetAllLunaMielQueryHookResult = ReturnType<typeof useGetAllLunaMielQuery>;
export type GetAllLunaMielLazyQueryHookResult = ReturnType<typeof useGetAllLunaMielLazyQuery>;
export type GetAllLunaMielQueryResult = Apollo.QueryResult<GetAllLunaMielQuery, GetAllLunaMielQueryVariables>;
export const GetAllTourDocument = gql`
    query GetAllTour($estadoTour: String, $page: Int, $numberPaginate: Int) {
  GetAllTour(
    estadoTour: $estadoTour
    page: $page
    numberPaginate: $numberPaginate
  ) {
    nroTotalItems
    data {
      tourId
      tituloTour
      slugTour
      regionTour
      ciudadTour
      estadoTour
      destacadoTour
      keywordsTour
      descripcionCortaTour
      descripcionLargaTour
      itinerarioTour
      puntoPartidaTour
      incluyeTour
      noIncluyeTour
      actividadesTour
      notasTour
      politicasTour
      videoPresentacionTour
      imagenPrincipalTour {
        id
        descripcion
        url
      }
      imagenSecundariaTour {
        id
        descripcion
        url
      }
      galeriaTour {
        id
        descripcion
        url
      }
      slugCategoria
      categoriaId
      Categoria {
        categoriaId
        slugCategoria
        tituloCategoria
        descripcion
        estadoCategoria
        keywordsCategoria
        imagenPrincipalCategoria {
          id
          descripcion
          url
        }
        imagenSecundariaCategoria {
          id
          descripcion
          url
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllTourQuery__
 *
 * To run a query within a React component, call `useGetAllTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTourQuery({
 *   variables: {
 *      estadoTour: // value for 'estadoTour'
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *   },
 * });
 */
export function useGetAllTourQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTourQuery, GetAllTourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTourQuery, GetAllTourQueryVariables>(GetAllTourDocument, options);
      }
export function useGetAllTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTourQuery, GetAllTourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTourQuery, GetAllTourQueryVariables>(GetAllTourDocument, options);
        }
export type GetAllTourQueryHookResult = ReturnType<typeof useGetAllTourQuery>;
export type GetAllTourLazyQueryHookResult = ReturnType<typeof useGetAllTourLazyQuery>;
export type GetAllTourQueryResult = Apollo.QueryResult<GetAllTourQuery, GetAllTourQueryVariables>;
export const GetAllUsersDocument = gql`
    query GetAllUsers($page: Int, $numberPaginate: Int, $tipoUsuario: String, $estado: String) {
  GetAllUsers(
    page: $page
    numberPaginate: $numberPaginate
    tipoUsuario: $tipoUsuario
    estado: $estado
  ) {
    nroTotalItems
    data {
      userId
      nombre
      apellidos
      email
      estado
      apiToken
    }
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      numberPaginate: // value for 'numberPaginate'
 *      tipoUsuario: // value for 'tipoUsuario'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetHorariosTourDocument = gql`
    query GetHorariosTour($anio: String, $mes: String, $tourId: Int) {
  GetHorariosTour(anio: $anio, mes: $mes, tourId: $tourId) {
    horarioTourId
    hora
    fecha
    cupos
    precio
    estado
    tourId
  }
}
    `;

/**
 * __useGetHorariosTourQuery__
 *
 * To run a query within a React component, call `useGetHorariosTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHorariosTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHorariosTourQuery({
 *   variables: {
 *      anio: // value for 'anio'
 *      mes: // value for 'mes'
 *      tourId: // value for 'tourId'
 *   },
 * });
 */
export function useGetHorariosTourQuery(baseOptions?: Apollo.QueryHookOptions<GetHorariosTourQuery, GetHorariosTourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetHorariosTourQuery, GetHorariosTourQueryVariables>(GetHorariosTourDocument, options);
      }
export function useGetHorariosTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetHorariosTourQuery, GetHorariosTourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetHorariosTourQuery, GetHorariosTourQueryVariables>(GetHorariosTourDocument, options);
        }
export type GetHorariosTourQueryHookResult = ReturnType<typeof useGetHorariosTourQuery>;
export type GetHorariosTourLazyQueryHookResult = ReturnType<typeof useGetHorariosTourLazyQuery>;
export type GetHorariosTourQueryResult = Apollo.QueryResult<GetHorariosTourQuery, GetHorariosTourQueryVariables>;
export const GetImagenesDocument = gql`
    query GetImagenes {
  GetImagenes {
    id
    descripcion
    url
  }
}
    `;

/**
 * __useGetImagenesQuery__
 *
 * To run a query within a React component, call `useGetImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetImagenesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
      }
export function useGetImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetImagenesQuery, GetImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetImagenesQuery, GetImagenesQueryVariables>(GetImagenesDocument, options);
        }
export type GetImagenesQueryHookResult = ReturnType<typeof useGetImagenesQuery>;
export type GetImagenesLazyQueryHookResult = ReturnType<typeof useGetImagenesLazyQuery>;
export type GetImagenesQueryResult = Apollo.QueryResult<GetImagenesQuery, GetImagenesQueryVariables>;
export const GetSlugTourDocument = gql`
    query GetSlugTour($slugTour: String) {
  GetSlugTour(slugTour: $slugTour) {
    tourId
    tituloTour
    slugTour
    regionTour
    ciudadTour
    estadoTour
    destacadoTour
    keywordsTour
    descripcionCortaTour
    descripcionLargaTour
    itinerarioTour
    puntoPartidaTour
    incluyeTour
    noIncluyeTour
    actividadesTour
    notasTour
    politicasTour
    videoPresentacionTour
    imagenPrincipalTour {
      id
      descripcion
      url
    }
    imagenSecundariaTour {
      id
      descripcion
      url
    }
    galeriaTour {
      id
      descripcion
      url
    }
    slugCategoria
    categoriaId
    Categoria {
      categoriaId
      slugCategoria
      tituloCategoria
      descripcion
      estadoCategoria
      keywordsCategoria
      imagenPrincipalCategoria {
        id
        descripcion
        url
      }
      imagenSecundariaCategoria {
        id
        descripcion
        url
      }
    }
  }
}
    `;

/**
 * __useGetSlugTourQuery__
 *
 * To run a query within a React component, call `useGetSlugTourQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSlugTourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSlugTourQuery({
 *   variables: {
 *      slugTour: // value for 'slugTour'
 *   },
 * });
 */
export function useGetSlugTourQuery(baseOptions?: Apollo.QueryHookOptions<GetSlugTourQuery, GetSlugTourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSlugTourQuery, GetSlugTourQueryVariables>(GetSlugTourDocument, options);
      }
export function useGetSlugTourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSlugTourQuery, GetSlugTourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSlugTourQuery, GetSlugTourQueryVariables>(GetSlugTourDocument, options);
        }
export type GetSlugTourQueryHookResult = ReturnType<typeof useGetSlugTourQuery>;
export type GetSlugTourLazyQueryHookResult = ReturnType<typeof useGetSlugTourLazyQuery>;
export type GetSlugTourQueryResult = Apollo.QueryResult<GetSlugTourQuery, GetSlugTourQueryVariables>;