package com.bsu.fpmi.ProfitApp;

import javax.servlet.*;
import javax.servlet.FilterConfig;
import javax.servlet.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

@WebFilter(filterName = "timeMeasurementFilter")
public class TimeMeasurementFilter implements Filter {


    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws ServletException, IOException {
      long start = System.currentTimeMillis();
        chain.doFilter(request, response);
        long end = System.currentTimeMillis();

        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String path = httpRequest.getRequestURI();
        String method = httpRequest.getMethod();

        System.out.println(String.format(("%s '%s' - done (%d ms)"), method, path, end-start));
    }

    @Override
    public void destroy() {

    }
}
