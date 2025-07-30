import { HttpInterceptorFn } from "@angular/common/http";

export const apiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const apiKey = "9691d59b75fdd95f42cc6e0b2fe77b2f";
  const page = req.params.get('page') || '1';
  const cloned = req.clone({
    setParams: { 
      api_key: apiKey,
      language: 'es-ES',
      page: page
    }
  });
  return next(cloned);
};
