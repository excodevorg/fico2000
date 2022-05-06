package com.fas.model.repository.specs;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.fas.model.com.domain.CodeInfoDomain;

public class CodeInfoSpecs {

	public static Specification<CodeInfoDomain> domainCodeEq(final String domainCode) {
		return new Specification<CodeInfoDomain>() {
			@Override
            public Predicate toPredicate(Root<CodeInfoDomain> root,
                    CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.equal(root.get("domainCode"), domainCode);
            }
		};
	}
	
	public static Specification<CodeInfoDomain> domainCodeIsNotNull() {
		return new Specification<CodeInfoDomain>() {
			@Override
            public Predicate toPredicate(Root<CodeInfoDomain> root,
                    CriteriaQuery<?> query, CriteriaBuilder cb) {
                return cb.isNotNull(root.get("domainCode"));
            }
		};
	}
	
}
