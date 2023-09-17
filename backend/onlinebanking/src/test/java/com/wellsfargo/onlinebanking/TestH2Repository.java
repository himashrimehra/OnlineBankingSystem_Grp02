package com.wellsfargo.onlinebanking;

import com.wellsfargo.onlinebanking.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestH2Repository extends JpaRepository<User,Integer> {
}