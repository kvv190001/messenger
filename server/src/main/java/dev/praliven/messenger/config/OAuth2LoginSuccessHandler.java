package dev.praliven.messenger.config;

import dev.praliven.messenger.controllers.UserController;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.Collections;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler  extends SavedRequestAwareAuthenticationSuccessHandler {

    private final UserController userController;
    private final OAuth2AuthorizedClientService authorizedClientService;

    @Value("${frontend.url}")
    private String frontendUrl;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {

        OAuth2AuthenticationToken oAuth2AuthenticationToken = (OAuth2AuthenticationToken) authentication;
        if("google".equals(oAuth2AuthenticationToken.getAuthorizedClientRegistrationId())){
            DefaultOAuth2User principal = (DefaultOAuth2User) authentication.getPrincipal();
            Map<String,Object> attributes = principal.getAttributes();
            String email = attributes.getOrDefault("email","").toString();
            String name = attributes.getOrDefault("name","").toString();


            // Log the attributes
            System.out.println("OAuth2 User Attributes: " + attributes);

            OAuth2AuthorizedClient authorizedClient = authorizedClientService.loadAuthorizedClient(
                    oAuth2AuthenticationToken.getAuthorizedClientRegistrationId(),
                    oAuth2AuthenticationToken.getName());
            String accessToken = authorizedClient.getAccessToken().getTokenValue();

            userController.findByEmail(email)
                    .ifPresentOrElse(user -> {
                        DefaultOAuth2User newUser = new DefaultOAuth2User(Collections.emptyList(),attributes, "sub");
                        Authentication securityAuth = new OAuth2AuthenticationToken(newUser, Collections.emptyList(), oAuth2AuthenticationToken.getAuthorizedClientRegistrationId());
                        SecurityContextHolder.getContext().setAuthentication(securityAuth);
                    }, () -> {
                        User user = new User(
                                null,
                                oAuth2AuthenticationToken.getName(),
                                name,
                                email,
                                attributes.getOrDefault("picture", "").toString(),
                                accessToken,
                                RegistrationSource.GOOGLE
                        );
                        userController.save(user);
                        DefaultOAuth2User newUser = new DefaultOAuth2User(Collections.emptyList(),attributes, "sub");
                        Authentication securityAuth = new OAuth2AuthenticationToken(newUser, Collections.emptyList(), oAuth2AuthenticationToken.getAuthorizedClientRegistrationId());
                        SecurityContextHolder.getContext().setAuthentication(securityAuth);
                    });
        }

        this.setAlwaysUseDefaultTargetUrl(true);
        this.setDefaultTargetUrl(frontendUrl);
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
